#!/usr/bin/env node

/**
 * Email Service Monitoring Script
 * El-Mag Insurance Medicare Advantage Website
 * 
 * This script monitors email service health and sends alerts if issues are detected.
 */

const nodemailer = require('nodemailer');
const fs = require('fs').promises;
const path = require('path');

require('dotenv').config({ path: '.env.local' });

class EmailServiceMonitor {
  constructor() {
    this.logFile = path.join(__dirname, '..', 'logs', 'email-service.log');
    this.alertThreshold = 3; // Number of consecutive failures before alert
    this.consecutiveFailures = 0;
    this.lastSuccessTime = new Date();
  }

  async ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    try {
      await fs.mkdir(logDir, { recursive: true });
    } catch (error) {
      // Directory already exists or other error
    }
  }

  async log(level, message, data = {}) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data,
    };

    const logLine = JSON.stringify(logEntry) + '\n';
    
    try {
      await this.ensureLogDirectory();
      await fs.appendFile(this.logFile, logLine);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }

    // Also log to console
    const colors = {
      ERROR: '\x1b[31m',
      WARN: '\x1b[33m', 
      INFO: '\x1b[36m',
      SUCCESS: '\x1b[32m'
    };
    const color = colors[level] || '\x1b[0m';
    console.log(`${color}[${timestamp}] ${level}: ${message}\x1b[0m`);
    
    if (Object.keys(data).length > 0) {
      console.log('  Data:', JSON.stringify(data, null, 2));
    }
  }

  async createTransporter() {
    return nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async testConnection() {
    try {
      const transporter = await this.createTransporter();
      await transporter.verify();
      
      this.consecutiveFailures = 0;
      this.lastSuccessTime = new Date();
      
      await this.log('SUCCESS', 'Email service connection test passed');
      return true;
    } catch (error) {
      this.consecutiveFailures++;
      
      await this.log('ERROR', 'Email service connection test failed', {
        error: error.message,
        consecutiveFailures: this.consecutiveFailures,
      });
      
      if (this.consecutiveFailures >= this.alertThreshold) {
        await this.sendAlert('Connection Test Failed', error.message);
      }
      
      return false;
    }
  }

  async testEmailDelivery() {
    try {
      const transporter = await this.createTransporter();
      
      const testEmail = {
        from: `"El-Mag Email Monitor" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        subject: `Email Service Health Check - ${new Date().toLocaleString()}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #10b981; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0;">Email Service Health Check</h1>
              <p style="margin: 5px 0 0 0;">El-Mag Insurance Monitoring</p>
            </div>
            <div style="padding: 20px; background-color: #f0fdf4;">
              <h2 style="color: #047857;">✅ Service Status: Operational</h2>
              <p>This automated health check confirms that the email service is working correctly.</p>
              
              <div style="background-color: #dcfce7; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="color: #166534; margin-top: 0;">Health Check Details:</h3>
                <ul>
                  <li><strong>Check Time:</strong> ${new Date().toLocaleString()}</li>
                  <li><strong>SMTP Host:</strong> ${process.env.SMTP_HOST}</li>
                  <li><strong>SMTP Port:</strong> ${process.env.SMTP_PORT}</li>
                  <li><strong>Service Status:</strong> Healthy</li>
                </ul>
              </div>
              
              <p><small>This is an automated monitoring email. No action required.</small></p>
            </div>
          </div>
        `,
      };
      
      await transporter.sendMail(testEmail);
      
      this.consecutiveFailures = 0;
      this.lastSuccessTime = new Date();
      
      await this.log('SUCCESS', 'Email delivery test passed');
      return true;
    } catch (error) {
      this.consecutiveFailures++;
      
      await this.log('ERROR', 'Email delivery test failed', {
        error: error.message,
        consecutiveFailures: this.consecutiveFailures,
      });
      
      if (this.consecutiveFailures >= this.alertThreshold) {
        await this.sendAlert('Email Delivery Failed', error.message);
      }
      
      return false;
    }
  }

  async sendAlert(subject, message) {
    try {
      // In production, you might want to send alerts to a different email
      // or integrate with services like PagerDuty, Slack, etc.
      const alertEmail = process.env.ALERT_EMAIL || process.env.SMTP_USER;
      
      const transporter = await this.createTransporter();
      
      const alertEmailContent = {
        from: `"El-Mag Email Alerts" <${process.env.SMTP_USER}>`,
        to: alertEmail,
        subject: `🚨 Email Service Alert: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #dc2626; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0;">🚨 Email Service Alert</h1>
              <p style="margin: 5px 0 0 0;">El-Mag Insurance Website</p>
            </div>
            <div style="padding: 20px; background-color: #fef2f2;">
              <h2 style="color: #b91c1c;">Alert: ${subject}</h2>
              <p><strong>Message:</strong> ${message}</p>
              
              <div style="background-color: #fee2e2; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="color: #991b1b; margin-top: 0;">Alert Details:</h3>
                <ul>
                  <li><strong>Alert Time:</strong> ${new Date().toLocaleString()}</li>
                  <li><strong>Consecutive Failures:</strong> ${this.consecutiveFailures}</li>
                  <li><strong>Last Success:</strong> ${this.lastSuccessTime.toLocaleString()}</li>
                  <li><strong>Service:</strong> Email Service (SMTP)</li>
                </ul>
              </div>
              
              <div style="background-color: #fef3c7; padding: 15px; border-radius: 5px; border-left: 4px solid #f59e0b;">
                <h3 style="color: #92400e; margin-top: 0;">Recommended Actions:</h3>
                <ul>
                  <li>Check SMTP server status and connectivity</li>
                  <li>Verify authentication credentials</li>
                  <li>Review email service provider status page</li>
                  <li>Check server logs for detailed error information</li>
                  <li>Test email service manually if needed</li>
                </ul>
              </div>
              
              <p><strong>This is an automated alert from the El-Mag Insurance email monitoring system.</strong></p>
            </div>
          </div>
        `,
      };
      
      await transporter.sendMail(alertEmailContent);
      await this.log('INFO', 'Alert email sent', { subject, alertsSent: 1 });
    } catch (error) {
      await this.log('ERROR', 'Failed to send alert email', {
        error: error.message,
        originalAlert: { subject, message }
      });
    }
  }

  async checkServiceHealth() {
    await this.log('INFO', 'Starting email service health check');
    
    // Test 1: Connection test
    const connectionOk = await this.testConnection();
    
    // Test 2: Email delivery test (only if connection is OK)
    let deliveryOk = false;
    if (connectionOk) {
      deliveryOk = await this.testEmailDelivery();
    }
    
    // Generate health report
    const healthStatus = connectionOk && deliveryOk ? 'HEALTHY' : 'UNHEALTHY';
    const healthReport = {
      status: healthStatus,
      connectionTest: connectionOk,
      deliveryTest: deliveryOk,
      consecutiveFailures: this.consecutiveFailures,
      lastSuccessTime: this.lastSuccessTime,
      timestamp: new Date(),
    };
    
    await this.log('INFO', `Health check completed - Status: ${healthStatus}`, healthReport);
    
    return healthReport;
  }

  async getRecentLogs(hours = 24) {
    try {
      await this.ensureLogDirectory();
      const logContent = await fs.readFile(this.logFile, 'utf-8');
      const logs = logContent.split('\n')
        .filter(line => line.trim())
        .map(line => {
          try {
            return JSON.parse(line);
          } catch {
            return null;
          }
        })
        .filter(log => log !== null);
      
      const cutoffTime = new Date(Date.now() - (hours * 60 * 60 * 1000));
      return logs.filter(log => new Date(log.timestamp) > cutoffTime);
    } catch (error) {
      await this.log('WARN', 'Failed to read recent logs', { error: error.message });
      return [];
    }
  }

  async generateHealthReport() {
    const recentLogs = await this.getRecentLogs(24);
    const errors = recentLogs.filter(log => log.level === 'ERROR');
    const successes = recentLogs.filter(log => log.level === 'SUCCESS');
    
    const report = {
      timestamp: new Date(),
      period: '24 hours',
      totalLogs: recentLogs.length,
      errors: errors.length,
      successes: successes.length,
      successRate: recentLogs.length > 0 ? ((successes.length / recentLogs.length) * 100).toFixed(2) + '%' : 'N/A',
      currentStatus: this.consecutiveFailures === 0 ? 'HEALTHY' : 'UNHEALTHY',
      consecutiveFailures: this.consecutiveFailures,
      lastSuccessTime: this.lastSuccessTime,
    };
    
    return report;
  }
}

// CLI Interface
async function main() {
  const command = process.argv[2];
  const monitor = new EmailServiceMonitor();
  
  switch (command) {
    case 'test':
      console.log('🧪 Running email service health check...');
      const healthReport = await monitor.checkServiceHealth();
      console.log('\n📊 Health Report:', JSON.stringify(healthReport, null, 2));
      process.exit(healthReport.status === 'HEALTHY' ? 0 : 1);
      
    case 'monitor':
      console.log('🔍 Starting continuous email service monitoring...');
      const interval = parseInt(process.argv[3]) || 300; // Default: 5 minutes
      console.log(`   Checking every ${interval} seconds`);
      
      // Run initial check
      await monitor.checkServiceHealth();
      
      // Set up recurring checks
      setInterval(async () => {
        await monitor.checkServiceHealth();
      }, interval * 1000);
      
      break;
      
    case 'report':
      console.log('📈 Generating email service health report...');
      const report = await monitor.generateHealthReport();
      console.log('\n📊 24-Hour Health Report:');
      console.log(JSON.stringify(report, null, 2));
      break;
      
    case 'logs':
      const hours = parseInt(process.argv[3]) || 24;
      console.log(`📋 Recent logs (${hours} hours):`);
      const logs = await monitor.getRecentLogs(hours);
      logs.forEach(log => {
        const color = {
          ERROR: '\x1b[31m',
          WARN: '\x1b[33m',
          INFO: '\x1b[36m',
          SUCCESS: '\x1b[32m'
        }[log.level] || '\x1b[0m';
        console.log(`${color}[${log.timestamp}] ${log.level}: ${log.message}\x1b[0m`);
      });
      break;
      
    default:
      console.log('📧 El-Mag Insurance Email Service Monitor');
      console.log('=========================================');
      console.log('');
      console.log('Usage:');
      console.log('  node scripts/monitor-email-service.js test     # Run single health check');
      console.log('  node scripts/monitor-email-service.js monitor [interval] # Continuous monitoring');
      console.log('  node scripts/monitor-email-service.js report   # Generate health report');
      console.log('  node scripts/monitor-email-service.js logs [hours] # Show recent logs');
      console.log('');
      console.log('Examples:');
      console.log('  node scripts/monitor-email-service.js test');
      console.log('  node scripts/monitor-email-service.js monitor 600  # Check every 10 minutes');
      console.log('  node scripts/monitor-email-service.js logs 48      # Show 48 hours of logs');
      process.exit(0);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', async (error) => {
  const monitor = new EmailServiceMonitor();
  await monitor.log('ERROR', 'Unhandled promise rejection in email monitor', {
    error: error.message,
    stack: error.stack
  });
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', async () => {
  const monitor = new EmailServiceMonitor();
  await monitor.log('INFO', 'Email service monitor shutting down gracefully');
  process.exit(0);
});

if (require.main === module) {
  main().catch(console.error);
}

module.exports = EmailServiceMonitor;