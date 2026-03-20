"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ADMIN_EMAIL = "acemichel0@gmail.com";
const ADMIN_PASSWORD = "@3842YasLove1357";

const DB_NAME = "TGIAM_DB";
const STORE_NAME = "pitchdecks";
const DB_VERSION = 2;

let dbInstance: IDBDatabase | null = null;

async function openDB(): Promise<IDBDatabase> {
  if (dbInstance) return dbInstance;
  
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    
    request.onerror = () => {
      console.error("DB open error:", request.error);
      reject(request.error);
    };
    
    request.onsuccess = () => {
      dbInstance = request.result;
      resolve(request.result);
    };
    
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };
  });
}

async function savePitchDeck(file: File): Promise<void> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const data = {
        id: "pitchdeck",
        name: file.name,
        data: result,
        size: file.size,
        type: file.type,
        updatedAt: new Date().toISOString(),
      };
      
      openDB().then((db) => {
        const transaction = db.transaction([STORE_NAME], "readwrite");
        const store = transaction.objectStore(STORE_NAME);
        const request = store.put(data);
        
        request.onsuccess = () => {
          resolve();
        };
        
        request.onerror = () => {
          reject(request.error);
        };
      }).catch(reject);
    };
    
    reader.onerror = () => {
      reject(reader.error || new Error("Failed to read file"));
    };
    
    reader.readAsDataURL(file);
  });
}

async function getPitchDeck(): Promise<{ name: string; data: string; size: number } | null> {
  if (typeof window === "undefined") {
    return null;
  }
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
    
    request.onerror = () => {
      reject(request.error);
    };
  });
}

async function deletePitchDeck(): Promise<void> {
  if (typeof window === "undefined") {
    return;
  }
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete("pitchdeck");
    
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

interface PlatformLink {
  id: string;
  name: string;
  url: string;
  description: string;
}

async function getPlatforms(): Promise<PlatformLink[]> {
  if (typeof window === "undefined") {
    return [];
  }
  return new Promise((resolve) => {
    const data = localStorage.getItem("tgiam_platforms");
    resolve(data ? JSON.parse(data) : []);
  });
}

async function savePlatforms(platforms: PlatformLink[]): Promise<void> {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem("tgiam_platforms", JSON.stringify(platforms));
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
  const [platforms, setPlatforms] = useState<PlatformLink[]>([]);
  const [newPlatform, setNewPlatform] = useState({ name: "", url: "", description: "" });
  const [editingPlatform, setEditingPlatform] = useState<PlatformLink | null>(null);
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
    
    getPlatforms().then(setPlatforms);
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
    if (!pitchDeck) {
      setUploadStatus("No file selected.");
      return;
    }
    
    setUploadStatus("Uploading...");
    try {
      console.log("Starting upload for:", pitchDeck.name, pitchDeck.size);
      await savePitchDeck(pitchDeck);
      console.log("Save complete, fetching...");
      const deck = await getPitchDeck();
      console.log("Fetched deck:", deck ? deck.name : null);
      setCurrentPitchDeck(deck);
      setUploadStatus("Pitch deck uploaded successfully!");
      setPitchDeck(null);
    } catch (err) {
      console.error("Upload error:", err);
      setUploadStatus("Upload failed: " + (err instanceof Error ? err.message : "Unknown error"));
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

  const handleAddPlatform = async () => {
    if (!newPlatform.name || !newPlatform.url) return;
    const platform: PlatformLink = {
      id: Date.now().toString(),
      name: newPlatform.name,
      url: newPlatform.url,
      description: newPlatform.description,
    };
    const updated = [...platforms, platform];
    setPlatforms(updated);
    await savePlatforms(updated);
    setNewPlatform({ name: "", url: "", description: "" });
  };

  const handleUpdatePlatform = async () => {
    if (!editingPlatform) return;
    const updated = platforms.map(p => p.id === editingPlatform.id ? editingPlatform : p);
    setPlatforms(updated);
    await savePlatforms(updated);
    setEditingPlatform(null);
  };

  const handleDeletePlatform = async (id: string) => {
    const updated = platforms.filter(p => p.id !== id);
    setPlatforms(updated);
    await savePlatforms(updated);
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

        {/* Platforms Section */}
        <div className="mt-8 p-8 bg-white/5 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Platforms & Apps</h2>
          
          {/* Add New Platform */}
          <div className="mb-6 p-4 bg-black/30 rounded-xl border border-white/5">
            <h3 className="text-white font-semibold mb-4">Add New Platform/App</h3>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Platform Name (e.g., UNBNKD)"
                value={newPlatform.name}
                onChange={(e) => setNewPlatform({ ...newPlatform, name: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
              />
              <input
                type="url"
                placeholder="Platform URL (e.g., https://unbnkd.com)"
                value={newPlatform.url}
                onChange={(e) => setNewPlatform({ ...newPlatform, url: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Short Description"
                value={newPlatform.description}
                onChange={(e) => setNewPlatform({ ...newPlatform, description: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
              />
              <button
                onClick={handleAddPlatform}
                disabled={!newPlatform.name || !newPlatform.url}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add Platform
              </button>
            </div>
          </div>

          {/* Existing Platforms */}
          {platforms.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Your Platforms</h3>
              {platforms.map((platform) => (
                <div key={platform.id} className="p-4 bg-black/30 rounded-xl border border-white/5">
                  {editingPlatform?.id === platform.id ? (
                    <div className="grid gap-3">
                      <input
                        type="text"
                        value={editingPlatform.name}
                        onChange={(e) => setEditingPlatform({ ...editingPlatform, name: e.target.value })}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      />
                      <input
                        type="url"
                        value={editingPlatform.url}
                        onChange={(e) => setEditingPlatform({ ...editingPlatform, url: e.target.value })}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      />
                      <input
                        type="text"
                        value={editingPlatform.description}
                        onChange={(e) => setEditingPlatform({ ...editingPlatform, description: e.target.value })}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={handleUpdatePlatform}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingPlatform(null)}
                          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-white font-semibold">{platform.name}</h4>
                        <p className="text-gray-400 text-sm">{platform.description}</p>
                        <a href={platform.url} target="_blank" rel="noopener noreferrer" className="text-purple-400 text-sm hover:underline">
                          {platform.url}
                        </a>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingPlatform(platform)}
                          className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeletePlatform(platform.id)}
                          className="px-3 py-1 bg-red-600/20 text-red-400 border border-red-500/50 text-sm rounded-lg hover:bg-red-600/30"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {platforms.length === 0 && (
            <p className="text-gray-500 text-sm">No platforms added yet. Add your first platform above.</p>
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
