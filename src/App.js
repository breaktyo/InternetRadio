import React, { useEffect, useState } from 'react';
import RadioPlayer from './RadioPlayer';
import './App.css';
import PrivacyPopup from './PrivacyPopup';

function App() {
  const [location, setLocation] = useState(null);
  const [browserInfo, setBrowserInfo] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation(pos.coords),
        (err) => console.warn("Geolokalizacja odrzucona.")
      );
    }

    setBrowserInfo({
      appName: navigator.appName,
      userAgent: navigator.userAgent,
      platform: navigator.platform,
    });
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Radio Internetowe</h1>
      </header>

      <main className="main-content">
        <section className="radio-player">
          <RadioPlayer />
        </section>

        {location && (
          <section className="info-section">
            <p>Twoja lokalizacja: <span>{location.latitude}, {location.longitude}</span></p>
          </section>
        )}

        {browserInfo && (
          <section className="info-section">
            <p>Przeglądarka: <span>{browserInfo.appName}</span></p>
            <p>System: <span>{browserInfo.platform}</span></p>
            <p>User Agent: <span>{browserInfo.userAgent}</span></p>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2025 Radio Internetowe. Wszelkie prawa zastrzeżone.</p>
      </footer>

      <PrivacyPopup />
    </div>
  );
}

export default App;
