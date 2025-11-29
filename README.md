## Deploying a Node.js Express App on AWS EC2

A simple Node.js Express application deployed on AWS EC2 Ubuntu instance. This project demonstrates backend deployment fundamentals including Linux server setup, SSH access, security configuration, and application hosting.

**Application**: Basic Express "Hello World" app (code in /app folder)

**Focus**: AWS EC2 deployment workflow and server configuration

## Project Overview

- Launching and configuring an EC2 instance (Ubuntu)
- SSH connection using PEM key authentication
- Installing Node.js runtime and dependencies
- Deploying application from GitHub
- Configuring security groups for network access
- Running Express server on EC2
- Accessing application via public IP

## Local Testing 

Before deploying to EC2, test the application locally:
```bash
# Clone and run locally
git clone https://github.com/nihmaltk/express-ec2-deployment.git
cd express-ec2-deployment/app
npm install
npm start
```
Access at: `http://localhost:3000`

## Deployment Steps

1. **Launch EC2 Instance**
- **AMI**: Ubuntu Server 22.04 LTS
- **Instance Type**: t3.micro
- **Key Pair**: Create/select `.pem` file for SSH access
- **Security Group Rules**:
  - SSH (Port 22) - Specific IP
  - Custom TCP (Port 3000) - Anywhere (0.0.0.0/0)

2. **Connect to EC2 Instance**
```bash
# Set proper permissions and connect
chmod 400  /path/to/key_name.pem
ssh -i "/path/to/key_name.pem" ubuntu@<EC2-Public-IP>
```

3. **Update System Packages**
```bash
sudo apt update && sudo apt upgrade -y
```

4. **Install Node.js, npm, and Git**
```bash
# Install required packages
sudo apt install nodejs npm git -y

# Verify Installation
node -v
npm -v
git --version
```

5. **Deploy Application**
```bash
# Clone repository and setup
git clone https://github.com/nihmaltk/express-ec2-deployment.git
cd express-ec2-deployment/app
npm install

# Start application
npm start
```

8. **Access Application**

Open browser and navigate to: `http://<EC2-Public-IP>:3000`

**Expected output:** `Hello World from Express!`

**Note:** Replace `<EC2-Public-IP>` with your instance's actual public IP address and `/path/to/key_name.pem` with your actual key file path.

## Security Group Configuration

| Type       | Protocol | Port | Source    | Description          |
|------------|----------|------|-----------|----------------------|
| SSH        | TCP      | 22   | Specific IP | SSH access         |
| Custom TCP | TCP      | 3000 | 0.0.0.0/0 | Express app access   |

## Tech Stack

- **Backend**: Node.js + Express.js
- **Cloud Provider**: AWS EC2

## Key Concepts

- Setting up and configuring AWS EC2 instances
- Linux server management and package installation
- SSH key-based authentication
- Security group configuration for network access
- Deploying Node.js applications on cloud infrastructure






