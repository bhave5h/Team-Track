// localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstName": "Bhavesh Chawre",
    "email": "Bhavesh@bigtopsocial.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Prepare Report",
        "taskDescription": "Create the monthly performance report",
        "taskDate": "2025-09-10",
        "category": "Reporting",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend weekly sync with team",
        "taskDate": "2025-09-12",
        "category": "Meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Client Follow-up",
        "taskDescription": "Send email to client about updates",
        "taskDate": "2025-09-14",
        "category": "Communication",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Bug Fix",
        "taskDescription": "Fix issue in login system",
        "taskDate": "2025-09-15",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Shobhit",
    "email": "Shobhit@bigtopsocial.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Write Documentation",
        "taskDescription": "Document new API endpoints",
        "taskDate": "2025-09-10",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Design Review",
        "taskDescription": "Review UI design for dashboard",
        "taskDate": "2025-09-11",
        "category": "Design",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Deploy App",
        "taskDescription": "Deploy new version to staging server",
        "taskDate": "2025-09-14",
        "category": "Deployment",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "QA Testing",
        "taskDescription": "Test new features on staging",
        "taskDate": "2025-09-15",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Sumit Kumbhalkar",
    "email": "Sumit@bigtopsocial.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Security Check",
        "taskDescription": "Run vulnerability scans",
        "taskDate": "2025-09-09",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Code Optimization",
        "taskDescription": "Improve query performance",
        "taskDate": "2025-09-12",
        "category": "Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team Training",
        "taskDescription": "Conduct workshop on Git workflow",
        "taskDate": "2025-09-13",
        "category": "Training",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "UI Testing",
        "taskDescription": "Test UI components across browsers",
        "taskDate": "2025-09-15",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Data Cleanup",
        "taskDescription": "Remove redundant records from DB",
        "taskDate": "2025-09-16",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Feature Planning",
        "taskDescription": "Plan Q4 feature roadmap",
        "taskDate": "2025-09-18",
        "category": "Planning",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstName": "vrundita Jamkar",
    "email": "vrundita@bigtopsocial.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Market Research",
        "taskDescription": "Analyze competitors’ strategies",
        "taskDate": "2025-09-12",
        "category": "Research",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Presentation Prep",
        "taskDescription": "Prepare slides for client pitch",
        "taskDate": "2025-09-13",
        "category": "Presentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Invoice Processing",
        "taskDescription": "Process vendor invoices",
        "taskDate": "2025-09-14",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Error Logs",
        "taskDescription": "Check application logs for errors",
        "taskDate": "2025-09-15",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Harsh",
    "email": "harsh@bigtopsocial.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Server Backup",
        "taskDescription": "Run full server backup",
        "taskDate": "2025-09-10",
        "category": "IT",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team Lunch",
        "taskDescription": "Arrange team bonding lunch",
        "taskDate": "2025-09-13",
        "category": "HR",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Bug Triage",
        "taskDescription": "Categorize new issues",
        "taskDate": "2025-09-14",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Update Dependencies",
        "taskDescription": "Upgrade project libraries",
        "taskDate": "2025-09-15",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
];


const admin = [
  {
    "id": 1,
    "firstName": "Admin",
    "email": "admin@example.com",
    "password": "123"
  }
];



export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}

}