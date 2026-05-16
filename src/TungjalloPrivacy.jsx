import React from 'react';

const TungjalloPrivacy = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#333',
      lineHeight: '1.6',
    },
    title: {
      color: '#1a1a1a',
      fontSize: '2.5rem',
      marginBottom: '10px',
    },
    meta: {
      color: '#666',
      fontStyle: 'italic',
      marginBottom: '30px',
    },
    sectionTitle: {
      color: '#2c3e50',
      fontSize: '1.5rem',
      marginTop: '30px',
      borderBottom: '2px solid #eee',
      paddingBottom: '5px',
    },
    box: {
      backgroundColor: '#f8f9fa',
      borderLeft: '4px solid #3498db',
      padding: '15px',
      margin: '20px 0',
      borderRadius: '4px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy for Tungjallo</h1>
      <p style={styles.meta}>Effective Date: May 17, 2026</p>

      <p>
        Welcome to <strong>Tungjallo</strong> ("we," "our," or "us"). Tungjallo is a simple budget planner 
        application built for Android devices. Your privacy is paramount to us, and this Privacy Policy 
        explains how we handle your data.
      </p>

      <h2 style={styles.sectionTitle}>1. Data Collection & Offline Operation</h2>
      <div style={styles.box}>
        <strong>Absolute Privacy:</strong> Tungjallo is a fully offline application. It does not 
        connect to external servers, database infrastructures, or third-party analytics platforms. 
        No personal or financial data is ever collected, transmitted, or monitored by us.
      </div>

      <h2 style={styles.sectionTitle}>2. Data Export (JSON)</h2>
      <p>
        The app allows you to export your budgeting data manually. This data is exported strictly as a local 
        <strong> JSON file</strong> saved directly to your device's storage. We have no access to this file, 
        and you maintain full control over where it is shared or moved.
      </p>

      <h2 style={styles.sectionTitle}>3. Future Cloud Features (Google Drive)</h2>
      <p>
        We plan to introduce an optional cloud backup feature in future updates. This feature will allow you to 
        sync your budget data to <strong>your own personal Google Drive account</strong>. Even when this feature 
        is introduced, your data will move securely between your device and your Google account. We will never 
        host your data on our own servers or have access to your storage credentials.
      </p>

      <h2 style={styles.sectionTitle}>4. Contact Us</h2>
      <p>
        If you have any questions or suggestions about this Privacy Policy, feel free to contact us at: 
        <br />
        <strong>Email:</strong> support@yourdomain.com
      </p>
    </div>
  );
};

export default TungjalloPrivacy;
