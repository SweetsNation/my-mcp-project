'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import {
  ShieldCheckIcon,
  QrCodeIcon,
  KeyIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface MFASetupProps {
  onComplete?: () => void;
}

export default function MFASetup({ onComplete }: MFASetupProps) {
  const { user } = useAuth();
  const [step, setStep] = useState<'setup' | 'verify' | 'backup' | 'complete'>('setup');
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [secret, setSecret] = useState<string>('');
  const [backupCodes, setBackupCodes] = useState<string[]>([]);
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  useEffect(() => {
    if (step === 'setup') {
      generateMFASecret();
    }
  }, [step]);

  const generateMFASecret = async () => {
    try {
      setIsLoading(true);
      setError('');

      // In a real implementation, this would call your API
      // For now, we'll simulate the response
      const mockResponse = {
        secret: 'JBSWY3DPEHPK3PXP',
        qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=otpauth://totp/El-Mag%20Insurance%20Portal:user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=El-Mag%20Insurance%20Portal',
        backupCodes: ['A1B2C3D4', 'E5F6G7H8', 'I9J0K1L2', 'M3N4O5P6', 'Q7R8S9T0']
      };

      setSecret(mockResponse.secret);
      setQrCodeUrl(mockResponse.qrCodeUrl);
      setBackupCodes(mockResponse.backupCodes);
    } catch (error) {
      setError('Failed to generate MFA secret. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const verifyCode = async () => {
    if (!verificationCode || verificationCode.length !== 6) {
      setError('Please enter a valid 6-digit verification code.');
      return;
    }

    try {
      setIsLoading(true);
      setError('');

      // In a real implementation, this would call your API to verify the code
      // For now, we'll simulate a successful verification
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSuccess('MFA verification successful!');
      setStep('backup');
    } catch (error) {
      setError('Invalid verification code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const completeSetup = async () => {
    try {
      setIsLoading(true);
      setError('');

      // In a real implementation, this would call your API to enable MFA
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSuccess('Multi-factor authentication has been enabled successfully!');
      setStep('complete');
      
      if (onComplete) {
        onComplete();
      }
    } catch (error) {
      setError('Failed to enable MFA. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadBackupCodes = () => {
    const content = `El-Mag Insurance Portal - Backup Codes\n\nPlease save these backup codes in a secure location. You can use them to access your account if you lose your authenticator device.\n\n${backupCodes.map((code, index) => `${index + 1}. ${code}`).join('\n')}\n\nGenerated on: ${new Date().toLocaleDateString()}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mfa-backup-codes.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderSetupStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <ShieldCheckIcon className="mx-auto h-12 w-12 text-blue-600" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Set Up Multi-Factor Authentication
        </h2>
        <p className="mt-2 text-gray-600">
          Enhance your account security by enabling two-factor authentication
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Step 1: Scan QR Code
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Use your authenticator app (Google Authenticator, Authy, etc.) to scan this QR code:
        </p>
        
        {qrCodeUrl && (
          <div className="flex justify-center mb-4">
            <img 
              src={qrCodeUrl} 
              alt="MFA QR Code" 
              className="border-2 border-gray-300 rounded-lg"
            />
          </div>
        )}

        <div className="bg-white border border-gray-300 rounded-lg p-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Manual Entry Code
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={secret}
              readOnly
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 font-mono text-sm"
            />
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(secret)}
              className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              Copy
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            If you can't scan the QR code, manually enter this code in your authenticator app
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setStep('verify')}
          disabled={isLoading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {isLoading ? 'Generating...' : 'Next: Verify Code'}
        </button>
      </div>
    </div>
  );

  const renderVerifyStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <QrCodeIcon className="mx-auto h-12 w-12 text-blue-600" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Verify Your Authenticator App
        </h2>
        <p className="mt-2 text-gray-600">
          Enter the 6-digit code from your authenticator app to verify setup
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="space-y-4">
          <div>
            <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700 mb-2">
              Verification Code
            </label>
            <input
              id="verificationCode"
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="000000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl font-mono tracking-widest focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              maxLength={6}
            />
          </div>

          {error && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
              <ExclamationTriangleIcon className="h-5 w-5" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <button
            onClick={verifyCode}
            disabled={!verificationCode || verificationCode.length !== 6 || isLoading}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {isLoading ? 'Verifying...' : 'Verify Code'}
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setStep('setup')}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          ← Back to Setup
        </button>
      </div>
    </div>
  );

  const renderBackupStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <KeyIcon className="mx-auto h-12 w-12 text-blue-600" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Save Your Backup Codes
        </h2>
        <p className="mt-2 text-gray-600">
          Store these backup codes in a secure location. You'll need them if you lose access to your authenticator device.
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex">
          <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              Important Security Notice
            </h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                • Each backup code can only be used once<br/>
                • Store these codes securely and separately from your device<br/>
                • If you lose both your authenticator device and backup codes, you may lose access to your account
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg p-6">
        <div className="grid grid-cols-2 gap-4">
          {backupCodes.map((code, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center"
            >
              <span className="font-mono text-lg font-bold text-gray-900">{code}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={downloadBackupCodes}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Download Backup Codes
        </button>
        <button
          onClick={completeSetup}
          disabled={isLoading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {isLoading ? 'Enabling MFA...' : 'Complete Setup'}
        </button>
      </div>
    </div>
  );

  const renderCompleteStep = () => (
    <div className="text-center space-y-6">
      <CheckCircleIcon className="mx-auto h-12 w-12 text-green-600" />
      <h2 className="text-2xl font-bold text-gray-900">
        MFA Setup Complete!
      </h2>
      <p className="text-gray-600">
        Your account is now protected with multi-factor authentication.
      </p>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
        <h3 className="text-sm font-medium text-green-800 mb-2">
          What happens next?
        </h3>
        <ul className="text-sm text-green-700 space-y-1 text-left">
          <li>• You'll be prompted for a verification code on each login</li>
          <li>• Use your authenticator app to generate codes</li>
          <li>• Keep your backup codes safe for emergencies</li>
        </ul>
      </div>

      <button
        onClick={() => onComplete?.()}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Continue to Portal
      </button>
    </div>
  );

  if (!user) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Please log in to set up MFA.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      {step === 'setup' && renderSetupStep()}
      {step === 'verify' && renderVerifyStep()}
      {step === 'backup' && renderBackupStep()}
      {step === 'complete' && renderCompleteStep()}
    </div>
  );
}
