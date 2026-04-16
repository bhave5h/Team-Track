const employees = [
  {
    "id": 1,
    "firstName": "Bhavesh Chawre",
    "email": "Bhavesh@bigtopsocial.com",
    "password": "123"
  },
  {
    "id": 2,
    "firstName": "Shobhit",
    "email": "Shobhit@bigtopsocial.com",
    "password": "123"
  },
  {
    "id": 3,
    "firstName": "Sumit Kumbhalkar",
    "email": "Sumit@bigtopsocial.com",
    "password": "123"
  },
  {
    "id": 4,
    "firstName": "vrundita Jamkar",
    "email": "vrundita@bigtopsocial.com",
    "password": "123"
  },
  {
    "id": 5,
    "firstName": "Harsh",
    "email": "harsh@bigtopsocial.com",
    "password": "123"
  }
];

const tasks = [
  {
    "id": 1,
    "title": "Prepare Report",
    "description": "Create the monthly performance report",
    "date": "2025-09-10",
    "category": "Reporting",
    "status": "newTask",
    "assigned_to": "Bhavesh Chawre",
    "priority": "medium"
  },
  {
    "id": 2,
    "title": "Team Meeting",
    "description": "Attend weekly sync with team",
    "date": "2025-09-12",
    "category": "Meeting",
    "status": "completed",
    "assigned_to": "Bhavesh Chawre",
    "priority": "medium"
  },
  {
    "id": 3,
    "title": "Client Follow-up",
    "description": "Send email to client about updates",
    "date": "2025-09-14",
    "category": "Communication",
    "status": "active",
    "assigned_to": "Bhavesh Chawre",
    "priority": "medium"
  },
  {
    "id": 4,
    "title": "Bug Fix",
    "description": "Fix issue in login system",
    "date": "2025-09-15",
    "category": "Development",
    "status": "completed",
    "assigned_to": "Bhavesh Chawre",
    "priority": "medium"
  },
  {
    "id": 5,
    "title": "Write Documentation",
    "description": "Document new API endpoints",
    "date": "2025-09-10",
    "category": "Documentation",
    "status": "completed",
    "assigned_to": "Shobhit",
    "priority": "medium"
  },
  {
    "id": 6,
    "title": "Design Review",
    "description": "Review UI design for dashboard",
    "date": "2025-09-11",
    "category": "Design",
    "status": "newTask",
    "assigned_to": "Shobhit",
    "priority": "medium"
  },
  {
    "id": 7,
    "title": "Deploy App",
    "description": "Deploy new version to staging server",
    "date": "2025-09-14",
    "category": "Deployment",
    "status": "active",
    "assigned_to": "Shobhit",
    "priority": "medium"
  },
  {
    "id": 8,
    "title": "QA Testing",
    "description": "Test new features on staging",
    "date": "2025-09-15",
    "category": "Testing",
    "status": "failed",
    "assigned_to": "Shobhit",
    "priority": "medium"
  },
  {
    "id": 9,
    "title": "Security Check",
    "description": "Run vulnerability scans",
    "date": "2025-09-09",
    "category": "Security",
    "status": "completed",
    "assigned_to": "Sumit Kumbhalkar",
    "priority": "medium"
  },
  {
    "id": 10,
    "title": "Code Optimization",
    "description": "Improve query performance",
    "date": "2025-09-12",
    "category": "Development",
    "status": "newTask",
    "assigned_to": "Sumit Kumbhalkar",
    "priority": "medium"
  },
  {
    "id": 11,
    "title": "Team Training",
    "description": "Conduct workshop on Git workflow",
    "date": "2025-09-13",
    "category": "Training",
    "status": "failed",
    "assigned_to": "Sumit Kumbhalkar",
    "priority": "medium"
  },
  {
    "id": 12,
    "title": "UI Testing",
    "description": "Test UI components across browsers",
    "date": "2025-09-15",
    "category": "Testing",
    "status": "active",
    "assigned_to": "Sumit Kumbhalkar",
    "priority": "medium"
  },
  {
    "id": 13,
    "title": "Data Cleanup",
    "description": "Remove redundant records from DB",
    "date": "2025-09-16",
    "category": "Maintenance",
    "status": "completed",
    "assigned_to": "Sumit Kumbhalkar",
    "priority": "medium"
  },
  {
    "id": 14,
    "title": "Feature Planning",
    "description": "Plan Q4 feature roadmap",
    "date": "2025-09-18",
    "category": "Planning",
    "status": "active",
    "assigned_to": "Sumit Kumbhalkar",
    "priority": "medium"
  },
  {
    "id": 15,
    "title": "Market Research",
    "description": "Analyze competitors’ strategies",
    "date": "2025-09-12",
    "category": "Research",
    "status": "newTask",
    "assigned_to": "vrundita Jamkar",
    "priority": "medium"
  },
  {
    "id": 16,
    "title": "Presentation Prep",
    "description": "Prepare slides for client pitch",
    "date": "2025-09-13",
    "category": "Presentation",
    "status": "active",
    "assigned_to": "vrundita Jamkar",
    "priority": "medium"
  },
  {
    "id": 17,
    "title": "Invoice Processing",
    "description": "Process vendor invoices",
    "date": "2025-09-14",
    "category": "Finance",
    "status": "completed",
    "assigned_to": "vrundita Jamkar",
    "priority": "medium"
  },
  {
    "id": 18,
    "title": "Error Logs",
    "description": "Check application logs for errors",
    "date": "2025-09-15",
    "category": "Maintenance",
    "status": "failed",
    "assigned_to": "vrundita Jamkar",
    "priority": "medium"
  },
  {
    "id": 19,
    "title": "Server Backup",
    "description": "Run full server backup",
    "date": "2025-09-10",
    "category": "IT",
    "status": "newTask",
    "assigned_to": "Harsh",
    "priority": "medium"
  },
  {
    "id": 20,
    "title": "Team Lunch",
    "description": "Arrange team bonding lunch",
    "date": "2025-09-13",
    "category": "HR",
    "status": "active",
    "assigned_to": "Harsh",
    "priority": "medium"
  },
  {
    "id": 21,
    "title": "Bug Triage",
    "description": "Categorize new issues",
    "date": "2025-09-14",
    "category": "Development",
    "status": "failed",
    "assigned_to": "Harsh",
    "priority": "medium"
  },
  {
    "id": 22,
    "title": "Update Dependencies",
    "description": "Upgrade project libraries",
    "date": "2025-09-15",
    "category": "Development",
    "status": "active",
    "assigned_to": "Harsh",
    "priority": "medium"
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Admin",
    "email": "admin@example.com",
    "password": "123"
  }
];