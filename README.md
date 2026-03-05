# static-website-hosting-DevOps-Cheatsheet
🌐 Static Website Hosting using AWS S3

This project is deployed using Amazon S3 Static Website Hosting, which allows hosting static websites (HTML, CSS, JS) without a backend server.

☁️ What is Amazon S3?

Amazon Web Services (AWS) provides Amazon S3 (Simple Storage Service) — an object storage service that can also host static websites.

S3 is:

Highly scalable

Durable (99.999999999% durability)

Cost-effective

Easy to configure

🚀 Deployment Steps
1️⃣ Created an S3 Bucket

Logged into AWS Management Console

Navigated to S3 service

Created a new bucket with a globally unique name

2️⃣ Disabled Block Public Access

To make the website publicly accessible:

Disabled "Block all public access"

Acknowledged the warning

3️⃣ Uploaded Website Files

Uploaded:

index.html

styles.css

script.js

4️⃣ Enabled Static Website Hosting

Opened bucket → Properties

Enabled Static Website Hosting

Set:

Index document → index.html

Error document → index.html (or error.html)

5️⃣ Added Bucket Policy

Added a bucket policy to allow public read access:

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
6️⃣ Accessed Website via S3 Endpoint

After configuration, AWS generated a website endpoint like:

http://devopscheatsheet.s3-website-us-east-1.amazonaws.com/

This endpoint is used as the live website URL.
