"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ADMIN_EMAIL = "acemichel0@gmail.com";
const ADMIN_PASSWORD = "@3842YasLove1357";

const DB_NAME = "TGIAM_DB";
const STORE_NAME = "pitchdecks";

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };
  });
}

async function savePitchDeck(file: File): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const reader = new FileReader();
    reader.onloadend = () => {
      const request = store.put({
        id: "pitchdeck",
        name: file.name,
        data: reader.result as string,
        size: file.size,
        type: file.type,
        updatedAt: new Date().toISOString(),
      });
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    };
    reader.readAsDataURL(file);
  });
}

async function getPitchDeck(): Promise<{ name: string; data: string; size: number } | null> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get("pitchdeck");
    request.onsuccess = () => {
      if (request.result) {
        resolve({
          name: request.result.name,
          data: request.result.data,
          size: request.result.size,
        });
      } else {
        resolve(null);
      }
    };
    request.onerror = () => reject(request.error);
  });
}

async function deletePitchDeck(): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete("pitchdeck");
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

function getInitialState() {
  if (typeof window === "undefined") {
    return { loggedIn: false };
  }
  return {
    loggedIn: localStorage.getItem("tgiam_admin_logged_in") === "true",
  };
}

const initialState = getInitialState();

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(initialState.loggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pitchDeck, setPitchDeck] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const [currentPitchDeck, setCurrentPitchDeck] = useState<{ name: string; data: string; size: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getPitchDeck()
      .then((deck) => {
        if (deck) {
          setCurrentPitchDeck(deck);
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      localStorage.setItem("tgiam_admin_logged_in", "true");
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("tgiam_admin_logged_in");
    router.push("/admin");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPitchDeck(file);
      setUploadStatus("");
    }
  };

  const handleUpload = async () => {
    if (pitchDeck) {
      setUploadStatus("Uploading...");
      try {
        await savePitchDeck(pitchDeck);
        const deck = await getPitchDeck();
        setCurrentPitchDeck(deck);
        setUploadStatus("Pitch deck uploaded successfully!");
        setPitchDeck(null);
      } catch (err) {
        setUploadStatus("Upload failed. Please try again.");
        console.error(err);
      }
    }
  };

  const handleDeletePitchDeck = async () => {
    try {
      await deletePitchDeck();
      setCurrentPitchDeck(null);
      setUploadStatus("Pitch deck removed.");
    } catch (err) {
      setUploadStatus("Failed to remove. Please try again.");
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </main>
    );
  }

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Admin Login</h1>
            <p className="text-gray-400">TGIAM Content Management</p>
          </div>
          <form onSubmit={handleLogin} className="p-8 bg-white/5 rounded-2xl border border-white/10">
            {error && (
              <div className="mb-4 p-3 bg-red-600/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link href="/" className="text-gray-400 hover:text-white text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-400">Manage TGIAM Content</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600/20 text-red-400 border border-red-500/50 rounded-lg hover:bg-red-600/30 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Pitch Deck Section */}
        <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Pitch Deck Management</h2>
          
          {currentPitchDeck && (
            <div className="mb-6 p-4 bg-green-600/20 border border-green-500/50 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-green-400 font-semibold">Current Pitch Deck Uploaded</p>
                  <p className="text-white">{currentPitchDeck.name}</p>
                  <p className="text-gray-400 text-sm">Size: {formatSize(currentPitchDeck.size)}</p>
                </div>
                <a
                  href={currentPitchDeck.data}
                  download={currentPitchDeck.name}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Download
                </a>
              </div>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">Upload New Pitch Deck (PDF/PPT/PPTX, max 100MB)</label>
            <input
              type="file"
              accept=".pdf,.ppt,.pptx"
              onChange={handleFileUpload}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-600 file:text-white file:cursor-pointer"
            />
          </div>

          {pitchDeck && (
            <div className="mb-4 p-4 bg-blue-600/20 border border-blue-500/50 rounded-lg">
              <p className="text-blue-400 font-semibold">Selected file:</p>
              <p className="text-white">{pitchDeck.name}</p>
              <p className="text-gray-400 text-sm">Size: {formatSize(pitchDeck.size)}</p>
            </div>
          )}

          {pitchDeck && (
            <div className="flex gap-4">
              <button
                onClick={handleUpload}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Upload & Save
              </button>
              <button
                onClick={() => setPitchDeck(null)}
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                Cancel
              </button>
            </div>
          )}

          {!pitchDeck && !currentPitchDeck && (
            <p className="text-gray-500 text-sm">No pitch deck uploaded yet. Select a file above and click Upload.</p>
          )}

          {uploadStatus && (
            <div className={`mt-4 p-3 rounded-lg ${uploadStatus.includes("success") || uploadStatus.includes("success") ? "bg-green-600/20 border border-green-500/50 text-green-400" : "bg-yellow-600/20 border border-yellow-500/50 text-yellow-400"}`}>
              {uploadStatus}
            </div>
          )}

          {currentPitchDeck && (
            <div className="mt-6 pt-6 border-t border-white/10">
              <button
                onClick={handleDeletePitchDeck}
                className="px-4 py-2 bg-red-600/20 text-red-400 border border-red-500/50 rounded-lg hover:bg-red-600/30 transition-colors"
              >
                Remove Pitch Deck
              </button>
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="mt-8 p-8 bg-white/5 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/partners" className="p-4 bg-black/30 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors text-center">
              <span className="text-white">Partners Page</span>
            </Link>
            <Link href="/resources" className="p-4 bg-black/30 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors text-center">
              <span className="text-white">Resources Page</span>
            </Link>
            <Link href="/" className="p-4 bg-black/30 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors text-center">
              <span className="text-white">Homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
