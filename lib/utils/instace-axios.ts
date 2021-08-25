import axios from "axios";
import {environment} from "../../environments/environment";

export const axios$ = axios.create({baseURL:environment.baseURL, withCredentials:true , })