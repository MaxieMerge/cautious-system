CREATE DATABASE project_SewerynM;

USE project_SewerynM;

CREATE TABLE Project(
    ProjectID SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ProjectName VARCHAR(30) NOT NULL
);

CREATE TABLE Employee (
    EmployeeID SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ProjectID SMALLINT,
    Fname VARCHAR(30) NOT NULL,
    Lname VARCHAR(50) NOT NULL,
    City VARCHAR(50) NOT NULL,
    Postcode VARCHAR(8),
    StreetAddress VARCHAR(100),
    SortCode CHAR(8),
    BAN CHAR(8),
    Salary INT NOT NULL,
    NIN CHAR(9) NOT NULL,
    Department CHAR(10) NOT NULL,
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

CREATE TABLE SalesEmployee ( 
    EmployeeID SMALLINT NOT NULL ,
    CommissionRate DECIMAL(3,2) NOT NULL,
    TotalSales INT NOT NULL,
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);

CREATE TABLE TechnicalEmployee (
    EmployeeID SMALLINT NOT NULL,
    CV tinytext,
    Image varchar(200),
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);

