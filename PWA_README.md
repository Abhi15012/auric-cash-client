# PWA (Progressive Web App) Implementation

## 📱 App Download Feature

Your PRC Gold Buyers website now supports installation as a native-like app on users' devices!

### ✨ Features Added:

#### 1. **Web App Manifest** (`/public/manifest.json`)
- App name, description, and branding for PRC Gold Buyers
- Multiple icon sizes (192x192, 256x256, 384x384, 512x512)
- Standalone display mode for app-like experience
- App shortcuts for quick actions (Sell Gold, Release Gold)
- Screenshots for app store-like presentation

#### 2. **Service Worker** (`/public/sw.js`)
- Offline functionality
- Caches important pages and assets
- Background sync capabilities
- Faster loading with cached resources

#### 3. **Install Components**
- **InstallPrompt**: Automatic prompts for app installation
- **InstallButton**: Reusable button component for manual installation

#### 4. **Offline Support**
- Dedicated offline page (`/offline`)
- Graceful fallback when internet is unavailable
- Cached resources for better performance

---

## 🚀 How Users Can Download the App:

### **Mobile (iOS/Android):**
1. Visit your website in Safari (iOS) or Chrome (Android)
2. Look for the "Install PRC Gold Buyers App" banner at the bottom
3. Tap "Install" to add to home screen
4. App appears like a native app with your icon

### **Desktop (Chrome/Edge):**
1. Visit your website in Chrome or Edge
2. Look for the install prompt banner at the top
3. Click "Install App" button
4. App installs and can be opened from desktop/taskbar

### **Manual Installation:**
- **Chrome:** Click the install icon (⊕) in the address bar
- **Safari:** Share button → "Add to Home Screen"
- **Edge:** Apps menu → "Install this site as an app"

---

## 🔧 Implementation Details:

### **Files Added:**
```
/public/
  ├── manifest.json          # App manifest
  ├── sw.js                  # Service worker
  └── (icons - using existing icon.png)

/src/app/
  └── offline/page.tsx       # Offline fallback page

/components/ui/
  ├── install-prompt.tsx     # Auto install prompts
  └── install-button.tsx     # Manual install button
```

### **Updated Files:**
- `layout.tsx` - Added PWA metadata and service worker registration
- `next.config.ts` - Added PWA-specific headers

---

## 🎯 Benefits for Users:

1. **Quick Access**: App icon on home screen/desktop
2. **Faster Loading**: Cached resources load instantly
3. **Offline Access**: Basic functionality works without internet
4. **App-like Experience**: Full-screen, no browser UI
5. **Push Notifications**: Ready for future notification features
6. **Better Performance**: Optimized loading and caching

---

## 💡 Usage in Components:

### Install Button Anywhere:
```tsx
import InstallButton from "@/components/ui/install-button";

// Basic usage
<InstallButton />

// Custom styling
<InstallButton 
  variant="outline" 
  size="lg" 
  className="my-custom-class"
>
  Download PRC Gold Buyers App
</InstallButton>
```

### Check Installation Status:
The components automatically detect if the app is already installed and hide accordingly.

---

## 📊 App Features:

- **Offline Mode**: Cached pages work without internet
- **App Shortcuts**: Quick access to Sell Gold and Release Gold
- **Native Feel**: Full-screen experience without browser chrome
- **Auto-Updates**: Service worker handles app updates
- **Cross-Platform**: Works on iOS, Android, Windows, macOS

---

## 🔮 Future Enhancements:

1. **Push Notifications**: Notify users about gold price changes
2. **Background Sync**: Sync data when connection returns
3. **Advanced Caching**: Smarter cache strategies
4. **App Store Publishing**: Publish to Google Play/App Store using TWA/PWA
5. **Biometric Authentication**: Face ID/Fingerprint login

Your users can now enjoy a native app experience for PRC Gold Buyers while you maintain a single codebase! 🎉
