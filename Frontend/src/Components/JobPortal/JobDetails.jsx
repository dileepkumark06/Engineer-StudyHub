import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Layout, Row } from "antd";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
  ProfileOutlined,
  MessageOutlined,
  SettingOutlined,
  UserOutlined,
  LockOutlined,
  BookOutlined,
  ReadOutlined,
  TeamOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./JobDetails.css";

const { Sider, Content } = Layout;

const JobDetails = () => {
  const [selectedJobType, setSelectedJobType] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const FeaturedJobCards = [
    {
      id: 1,
      package: "3 - 5 LPA",
      location: "Remote",
      title: "Junior Developer",
      tags: ["#JavaScript", "#React"],
      company: "Freshers Inc.",
      views: 500,
      logo: require("../../assets/images/grow.png"),
      buttonColor: "#87CEEB",
      startDate: "2024-01-01",
      experience: "0-1 years",

    },
    {
      id: 2,
      package: "5 - 12 LPA",
      location: "Bangalore Urban",
      title: " Data Science  Engineer",
      tags: ["#API", "#React", "#.NET"],
      company: "Anthology",
      views: 2092,
      logo: require("../../assets/images/anthology.png"),
      buttonColor: "#87CEEB",
    },
    {
      id: 3,
      package: "5 - 10 LPA",
      location: "Noida",
      title: "React JS Developer",
      tags: ["#jQuery", "#React", "#Angular"],
      company: "Technoarch Softwares",
      views: 2042,
      logo: require("../../assets/images/tecnoarch.png"),
      buttonColor: "#B2FF87",
    },
    {
      id: 4,
      package: "8 - 12 LPA",
      location: "Pune",
      title: "Software Engineer |",
      tags: ["#SDK", "#JSON", "#XML"],
      company: "Zebra Technologies",
      views: 2042,
      logo: require("../../assets/images/zebra.png"),
      buttonColor: "#B2FF87",
    },
    {
      id: 5,
      package: "6 - 10 LPA",
      location: "Noida",
      title: "Python Developer",
      tags: ["#python", "#sql", "#DSA"],
      company: "Impetus Technologies",
      views: 2042,
      logo: require("../../assets/images/impetus.png"),
      buttonColor: "#B2FF87",
    },
    {
      id: 6,
      package: "4.5 - 10 LPA",
      location: "Noida",
      title: "Jr. Node.js Developer",
      tags: ["#html/css", "#javascript", "#mongodb"],
      company: "Excellence Technologies",
      views: 2042,
      logo: require("../../assets/images/excellence.png"),
      buttonColor: "#B2FF87",
    },
  ];
  const FreshersJobCards = [
    {
      id: 1,
      package: "15 - 30 LPA",
      location: "Bangalore Urban",
      title: "Software Development ",
      tags: ["#DSA", "#Problem solving"],
      company: "Grow",
      views: 1251,
      logo: require("../../assets/images/grow.png"),
      buttonColor: "#FFDD87",
      formUrl: "https://groww.in/"
    },
    {
      id: 2,
      package: "5 - 12 LPA",
      location: "Bangalore Urban",
      title: " Data Science  Engineer",
      tags: ["#API", "#React", "#.NET"],
      company: "Anthology",
      views: 2092,
      logo: require("../../assets/images/anthology.png"),
      buttonColor: "#87CEEB",
      formUrl: "https://www.anthology.com/en-in/our-offices"

    },
    {
      id: 3,
      package: "5 - 10 LPA",
      location: "Noida",
      title: "React JS Developer",
      tags: ["#jQuery", "#React", "#Angular"],
      company: "Technoarch Softwares",
      views: 2042,
      logo: require("../../assets/images/tecnoarch.png"),
      buttonColor: "#B2FF87",
      formUrl: "https://www.technoarchsoftwares.com/"

    },
    {
      id: 4,
      package: "8 - 12 LPA",
      location: "Pune",
      title: "Software Engineer |",
      tags: ["#SDK", "#JSON", "#XML"],
      company: "Technoarch Softwares",
      views: 2042,
      logo: require("../../assets/images/zebra.png"),
      buttonColor: "#B2FF87",
      formUrl: "https://www.zebra.com/ap/en.html"

    },
    {
      id: 5,
      package: "6 - 10 LPA",
      location: "Noida",
      title: "Python Developer",
      tags: ["#python", "#sql", "#DSA"],
      company: "Impetus Technologies",
      views: 2042,
      logo: require("../../assets/images/impetus.png"),
      buttonColor: "#B2FF87",
      formUrl: "https://www.impetus.com/"

    },
    {
      id: 6,
      package: "11 - 13 LPA",
      location: "Hyderabad",
      title: "React Js Developer",
      tags: ["#HTML", "#css", "javascript"],
      company: "Robolabs R&D Pvt Ltd",
      views: 2042,
      logo: require("../../assets/images/Robols.png"),
      buttonColor: "#B2FF87",
      formUrl: "https://excellencetechnologies.in/"

    },
  ];
  const ExperiencedJobCards = [
    {
      id: 1,
      package: "6 - 12 LPA",
      location: "Pune",
      title: "Senior Software Engineer",
      tags: ["#Java", "#Spring"],
      company: "Experienced Corp.",
      views: 900,
      logo: require("../../assets/images/Experiened.png"),
      buttonColor: "#FFD700",
    },
    {
      id: 2,
      package: "12 - 14 LPA",
      location: "Bhopal",
      title: "Senior Software Engineer",
      tags: ["#Java", "#Spring"],
      company: "Maverick Console Services Pvt. Ltd.",
      views: 1000,
      logo: require("../../assets/images/Mervick.png"),
      buttonColor: "#FFD700",
    },
    {
      id: 3,
      package: "13- 14 LPA",
      location: "Bhopal",
      title: "Senior Data Engineer",
      tags: ["#Java", "#Spring"],
      company: "G-INFOSOFT TECHNOLOGIES",
      views: 500,
      logo: require("../../assets/images/Ginfosoft.png"),
      buttonColor: "#FFD700",
    },
    {
      id: 4,
      package: "15 - 17 LPA",
      location: "Pune",
      title: "Senior java Developer",
      tags: ["#Java", "#Spring"],
      company: "Soluzione IT Services",
      views: 800,
      logo: require("../../assets/images/Soluzione.png"),
      buttonColor: "#FFD700",
    },
    {
      id: 5,
      package: "17 - 18 LPA",
      location: "Bhopal",
      title: "Senior QA Engineer",
      tags: ["#Java", "#Spring"],
      company: "ISoft InfoTech",
      views: 900,
      logo: require("../../assets/images/isoft.png"),
      buttonColor: "#FFD700",
    },
    {
      id: 6,
      package: "18 - 20 LPA",
      location: "Hyderabad",
      title: "React js Developer",
      tags: ["#HTML", "#javascript", "CSS"],
      company: "Praadis Technologies Inc.",
      views: 1200,
      logo: require("../../assets/images/Pradis.png"),
      buttonColor: "#FFD700",
    },
  ];
  const InternshipJobCards = [
    {
      id: 1,
      package: "2 - 3 LPA",
      location: "Bangalore",
      title: "Internship in Data Science",
      tags: ["#Python", "#ML"],
      company: "Internship Hub",
      views: 300,
      logo: require("../../assets/images/Internship.png"),
      buttonColor: "#FF69B4",
    },
    {
      id: 2,
      package: "1 - 2 LPA",
      location: "Chennai",
      title: "Internship in Javascript",
      tags: ["#HTML", "#CSS"],
      company: "Solmeyvn software development company",
      views: 200,
      logo: require("../../assets/images/Solmeyn.png"),
      buttonColor: "#FF69B4",
    },
    {
      id: 3,
      package: "2 - 3 LPA",
      location: "Pune",
      title: "Internship in Data Analytics",
      tags: ["#DSA", "#ML"],
      company: "Inocrypt Infosoft",
      views: 300,
      logo: require("../../assets/images/InoCrypt.png"),
      buttonColor: "#FF69B4",
    },
    {
      id: 4,
      package: "2 - 4 LPA",
      location: "JabalPur",
      title: "Internship in Data Science",
      tags: ["#Python", "#ML"],
      company: "DOAGuru InfoSystems",
      views: 300,
      logo: require("../../assets/images/Duaguru.png"),
      buttonColor: "#FF69B4",
    },
    {
      id: 5,
      package: "1- 1.5 LPA",
      location: "Bangalore",
      title: "Internship in Digital Marketing",
      tags: ["#ALU", "#ML"],
      company: "Cognic Systems Pvt. Ltd.",
      views: 300,
      logo: require("../../assets/images/Cognic.png"),
      buttonColor: "#FF69B4",
    },
    {
      id: 6,
      package: "2 - 3 LPA",
      location: "Bangalore",
      title: "Internship in Data Science",
      tags: ["#Python", "#ML"],
      company: "Shine Software Technology",
      views: 300,
      logo: require("../../assets/images/Shine.png"),
      buttonColor: "#FF69B4",
    },
  ];

  const job = FeaturedJobCards.find((job) => job.id === parseInt(id));

  if (!job) return <div>Job not found</div>;


  const handleApplyNow = (formUrl) => {
    window.open(formUrl, "_blank");
  };

  const handleKnowMore = (jobId) => {
    navigate(`/know-more/${jobId}`); 
  };
  return (
    <Layout>
      <Sider
        width={250}
        style={{
          color: "#000",
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="icon-container">
          <div className="icon-item" onClick={() => setSelectedJobType("")}>
            <span
              style={{ fontSize: "20px", color: "#553cdf", fontWeight: "700" }}
            >
              All Opportunities
            </span>
          </div>
          <div className="icon-item">
            <span style={{ color: "#000" }}>Jobs</span>
          </div>
          <div
            className="icon-item"
            onClick={() => setSelectedJobType("freshers")}
          >
            <UsergroupAddOutlined
              style={{ fontSize: "24px", color: "#52c41a" }}
            />
            <span style={{ color: "#000" }}>Freshers Job</span>
          </div>
          <div
            className="icon-item"
            onClick={() => setSelectedJobType("experienced")}
          >
            <TeamOutlined style={{ fontSize: "24px", color: "#FFA500" }} />
            <span style={{ color: "#000" }}>Experienced Job</span>
          </div>
          <div
            className="icon-item"
            onClick={() => setSelectedJobType("internship")}
          >
            <BookOutlined style={{ fontSize: "24px", color: "#FF4500" }} />
            <span style={{ color: "#000" }}>Internships</span>
          </div>
          <div className="icon-item">
            <span style={{ color: "#000" }}>Events</span>
          </div>
          <div className="icon-item">
            <ProfileOutlined style={{ fontSize: "24px", color: "#ff5000" }} />
            <span style={{ color: "#000" }}>Hackethon</span>
          </div>
          <div className="icon-item">
            <span style={{ color: "#000" }}>Request</span>
          </div>
          <div className="icon-item">
            <ProfileOutlined style={{ fontSize: "24px", color: "#13c2c2" }} />
            <span style={{ color: "#000" }}>Resume Review</span>
          </div>
          <div className="icon-item">
            <span style={{ color: "#000" }}>Community</span>
          </div>
          <div className="icon-item">
            <MessageOutlined style={{ fontSize: "24px", color: "#722ed1" }} />
            <span style={{ color: "#000" }}>Discussions</span>
          </div>
          <div className="icon-item">
            <ReadOutlined style={{ fontSize: "24px", color: "#722ed1" }} />
            <span style={{ color: "#000" }}>Roadmaps</span>
          </div>
          <div className="icon-item">
            <SolutionOutlined style={{ fontSize: "24px", color: "#722ed1" }} />
            <span style={{ color: "#000" }}>Interview Experience</span>
          </div>
        </div>
      </Sider>

      <Layout>
        <Content style={{ padding: "20px" }}>
          {selectedJobType === "freshers" && (
            <div>
              <h2>Freshers Jobs</h2>
              <div className="job-grid">
                {FreshersJobCards.map((job) => (
                  <Card
                  key={job.id}
                  bordered={false}
                  hoverable
                  style={{
                    flex: "1 1 calc(33.333% - 40px)", /* Ensures three cards in one row */
                    margin: "20px",
                    padding: "20px",
                    height: "auto",
                    borderRadius: "20px",
                    border: "1px solid #f0f0f0",
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  bodyStyle={{ padding: "20px" }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        style={{
                          width: "80px",
                          borderRadius: "50%",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                          marginRight: "15px",
                        }}
                      />
                      <div>
                        <h3 style={{ fontSize: "20px", margin: "0", color: "#333" }}>
                          {job.title}
                        </h3>
                        <p style={{ margin: "0", fontSize: "14px", color: "#999" }}>
                          {job.company}
                        </p>
                      </div>
                    </div>



                    <div style={{ marginTop: "15px", color: "#666" }}>
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Package:</strong> {job.package}
                      </p>
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Location:</strong> {job.location}
                      </p>
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Views:</strong> {job.views}
                      </p>
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Start Date:</strong> {job.startDate || "TBD"}
                      </p>
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Experience:</strong> {job.experience || "Not Required"}
                      </p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                      <Button
                        type="primary"
                        shape="round"
                        size="large"
                        style={{
                          backgroundColor: "#4CAF50",
                          borderColor: "#4CAF50",
                          width: "120px",
                          height: "40px",
                          boxShadow: "0 4px 10px rgba(0, 128, 0, 0.2)",
                        }}
                        onClick={() => handleApplyNow(job.formUrl)}
                      >
                        Apply
                      </Button>
                      <Button
                        type="default"
                        shape="round"
                        size="large"
                        style={{
                          width: "120px",
                          height: "40px",
                          borderColor: "#1890ff",
                          color: "#1890ff",
                          boxShadow: "0 4px 10px rgba(24, 144, 255, 0.2)",
                        }}
                        onClick={() => handleKnowMore(job.id)}
                      >
                        Know More
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
          {selectedJobType === "experienced" && (
            <div>
              <h2>Experienced Jobs</h2>
              <div className="job-grid">
                {ExperiencedJobCards.map((job) => (
                   <Card
                   key={job.id}
                   bordered={false}
                   hoverable
                   style={{
                     margin: "20px",
                     padding: "20px",
                     maxWidth: "500px",
                     height: "auto",
                     borderRadius: "20px",
                     border: "1px solid #f0f0f0",
                     boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                     transition: "transform 0.3s ease, box-shadow 0.3s ease",
                   }}
                   bodyStyle={{ padding: "20px" }}
                   onHover={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)" }}
                 >
                   <div style={{ display: "flex", alignItems: "center" }}>
                     <img
                       src={job.logo}
                       alt={`${job.company} logo`}
                       style={{
                         width: "80px",
                         borderRadius: "50%",
                         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                         marginRight: "15px",
                       }}
                     />
                     <div>
                       <h3 style={{ fontSize: "20px", margin: "0", color: "#333" }}>
                         {job.title}
                       </h3>
                       <p style={{ margin: "0", fontSize: "14px", color: "#999" }}>
                         {job.company}
                       </p>
                     </div>
                   </div>



                   <div style={{ marginTop: "15px", color: "#666" }}>
                     <p style={{ marginBottom: "5px" }}>
                       <strong>Package:</strong> {job.package}
                     </p>
                     <p style={{ marginBottom: "5px" }}>
                       <strong>Location:</strong> {job.location}
                     </p>
                     <p style={{ marginBottom: "5px" }}>
                       <strong>Views:</strong> {job.views}
                     </p>
                     <p style={{ marginBottom: "5px" }}>
                       <strong>Start Date:</strong> {job.startDate || "TBD"}
                     </p>
                     <p style={{ marginBottom: "5px" }}>
                       <strong>Experience:</strong> {job.experience || "Not Required"}
                     </p>
                   </div>

                   <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                     <Button
                       type="primary"
                       shape="round"
                       size="large"
                       style={{
                         backgroundColor: "#4CAF50",
                         borderColor: "#4CAF50",
                         width: "120px",
                         height: "40px",
                         boxShadow: "0 4px 10px rgba(0, 128, 0, 0.2)",
                       }}
                       onClick={() => handleApplyNow(job.formUrl)}
                     >
                       Apply
                     </Button>
                     <Button
                       type="default"
                       shape="round"
                       size="large"
                       style={{
                         width: "120px",
                         height: "40px",
                         borderColor: "#1890ff",
                         color: "#1890ff",
                         boxShadow: "0 4px 10px rgba(24, 144, 255, 0.2)",
                       }}
                       onClick={() => handleKnowMore(job.id)}
                     >
                       Know More
                     </Button>
                   </div>
                 </Card>
                ))}
              </div>
            </div>
          )}
          {selectedJobType === "internship" && (
            <div>
              <h2>Internships</h2>
              <div className="job-grid">
                {InternshipJobCards.map((job) => (
                   <Card
                   key={job.id}
                   bordered={false}
                   hoverable
                   style={{
                     margin: "20px",
                     padding: "20px",
                     maxWidth: "500px",
                     height: "auto",
                     borderRadius: "20px",
                     border: "1px solid #f0f0f0",
                     boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                     transition: "transform 0.3s ease, box-shadow 0.3s ease",
                   }}
                   bodyStyle={{ padding: "20px" }}
                   onHover={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)" }}
                 >
                   <div style={{ display: "flex", alignItems: "center" }}>
                     <img
                       src={job.logo}
                       alt={`${job.company} logo`}
                       style={{
                         width: "80px",
                         borderRadius: "50%",
                         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                         marginRight: "15px",
                       }}
                     />
                     <div>
                       <h3 style={{ fontSize: "20px", margin: "0", color: "#333" }}>
                         {job.title}
                       </h3>
                       <p style={{ margin: "0", fontSize: "14px", color: "#999" }}>
                         {job.company}
                       </p>
                     </div>
                   </div>



                   <div style={{ marginTop: "15px", color: "#666" }}>
                     <p style={{ marginBottom: "5px" }}>
                       <strong>Package:</strong> {job.package}
                     </p>
                     <p style={{ marginBottom: "5px" }}>
                       <strong>Location:</strong> {job.location}
                     </p>
                     <p style={{ marginBottom: "5px" }}>
                       <strong>Views:</strong> {job.views}
                     </p>
                     <p style={{ marginBottom: "5px" }}>
                       <strong>Start Date:</strong> {job.startDate || "TBD"}
                     </p>
                     <p style={{ marginBottom: "5px" }}>
                       <strong>Experience:</strong> {job.experience || "Not Required"}
                     </p>
                   </div>

                   <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                     <Button
                       type="primary"
                       shape="round"
                       size="large"
                       style={{
                         backgroundColor: "#4CAF50",
                         borderColor: "#4CAF50",
                         width: "120px",
                         height: "40px",
                         boxShadow: "0 4px 10px rgba(0, 128, 0, 0.2)",
                       }}
                       onClick={() => handleApplyNow(job.formUrl)}
                     >
                       Apply
                     </Button>
                     <Button
                       type="default"
                       shape="round"
                       size="large"
                       style={{
                         width: "120px",
                         height: "40px",
                         borderColor: "#1890ff",
                         color: "#1890ff",
                         boxShadow: "0 4px 10px rgba(24, 144, 255, 0.2)",
                       }}
                       onClick={() => handleKnowMore(job.id)}
                     >
                       Know More
                     </Button>
                   </div>
                 </Card>
                ))}
              </div>
            </div>
          )}
          {selectedJobType === "" && (
            <div
              style={{
                width: "100%",
              }}
            >
              <h2>All Opportunities</h2>
              <div className="job-grid">
                {FeaturedJobCards.map((job) => (
                   <Card
                   key={job.id}
                   bordered={false}
                   hoverable
                   style={{
                     margin: "20px",
                     padding: "20px",
                     maxWidth: "500px",
                     height: "auto",
                     borderRadius: "20px",
                     border: "1px solid #f0f0f0",
                     boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                     transition: "transform 0.3s ease, box-shadow 0.3s ease",
                   }}
                   bodyStyle={{ padding: "20px" }}
                   onHover={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)" }}
                 >
                   <div style={{ display: "flex", alignItems: "center" }}>
                     <img
                       src={job.logo}
                       alt={`${job.company} logo`}
                       style={{
                         width: "80px",
                         borderRadius: "50%",
                         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                         marginRight: "15px",
                       }}
                     />
                     <div>
                       <h3 style={{ fontSize: "20px", margin: "0", color: "#333" }}>
                         {job.title}
                       </h3>
                       <p style={{ margin: "0", fontSize: "14px", color: "#999" }}>
                         {job.company}
                       </p>
                     </div>
                   </div>



                   <div style={{ marginTop: "15px", color: "#666" }}>
                     <p style={{ marginBottom: "5px" }}>
                       <strong>Package:</strong> {job.package}
                     </p>
                     <p style={{ marginBottom: "5px" }}>
                       <strong>Location:</strong> {job.location}
                     </p>
                     <p style={{ marginBottom: "5px" }}>
                       <strong>Views:</strong> {job.views}
                     </p>
                     <p style={{ marginBottom: "5px" }}>
                       <strong>Start Date:</strong> {job.startDate || "TBD"}
                     </p>
                     <p style={{ marginBottom: "5px" }}>
                       <strong>Experience:</strong> {job.experience || "Not Required"}
                     </p>
                   </div>

                   <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                     <Button
                       type="primary"
                       shape="round"
                       size="large"
                       style={{
                         backgroundColor: "#4CAF50",
                         borderColor: "#4CAF50",
                         width: "120px",
                         height: "40px",
                         boxShadow: "0 4px 10px rgba(0, 128, 0, 0.2)",
                       }}
                       onClick={() => handleApplyNow(job.formUrl)}
                     >
                       Apply
                     </Button>
                     <Button
                       type="default"
                       shape="round"
                       size="large"
                       style={{
                         width: "120px",
                         height: "40px",
                         borderColor: "#1890ff",
                         color: "#1890ff",
                         boxShadow: "0 4px 10px rgba(24, 144, 255, 0.2)",
                       }}
                       onClick={() => handleKnowMore(job.id)}
                     >
                       Know More
                     </Button>
                   </div>
                 </Card>
                ))}
              </div>
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default JobDetails;
