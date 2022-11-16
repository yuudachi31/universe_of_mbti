import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import articleJson from "../json/articleList.json";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";