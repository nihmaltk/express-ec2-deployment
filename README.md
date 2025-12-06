## Deploying a Node.js Express App on AWS EC2

A simple Node.js Express application deployed on AWS EC2 Ubuntu instance. This project demonstrates backend deployment fundamentals including Linux server setup, SSH access, security configuration, and application hosting.

## Project Overview

This project demonstrates the **end-to-end deployment** of a basic Node.js Express "Hello World" application onto an **AWS EC2 Ubuntu instance**.
- Launching and configuring an **AWS EC2** instance (Ubuntu 22.04 LTS).
- Establishing **SSH key-based authentication** and secure connection.
- Linux server management and installing the **Node.js** runtime and Git.
- Configuring **Security Groups** for network access (SSH and Custom TCP).
- Deploying and running a Node.js application on cloud infrastructure.

## Deployment Steps

1. **Launch EC2 Instance**
- **AMI**: Ubuntu Server 22.04 LTS
- **Instance Type**: t3.micro
- **Key Pair**: Download the .pem file
- **Security Group Rules**:
  - SSH (22) - Specific IP
  - Custom TCP (3000) - Anywhere (0.0.0.0/0)

2. **Connect to EC2 Instance**
```bash
chmod 400  /path/to/key_name.pem
ssh -i "/path/to/key_name.pem" ubuntu@<EC2-Public-IP>
```
3. **Install Dependencies**
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install nodejs npm git -y

node -v
npm -v
git --version
```

4. **Deploy Application**
```bash
git clone https://github.com/nihmaltk/express-ec2-deployment.git
cd express-ec2-deployment/app
npm install
npm start
```

5. **Access Application**

Open browser: `http://<EC2-Public-IP>:3000`

**Expected output:** `Hello World from Express!`

## Security Group Configuration

| Type       | Protocol | Port | Source    | Description          |
|------------|----------|------|-----------|----------------------|
| SSH        | TCP      | 22   | Specific IP | SSH access         |
| Custom TCP | TCP      | 3000 | 0.0.0.0/0 | Express app access   |

## Tech Stack

- Node.js
- Express.js
- AWS EC2 (Ubuntu)







