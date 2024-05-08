import axios from 'axios';

const host = `${window.location.protocol}//${window.location.hostname}`
const full = `${window.location.protocol}//${window.location.host}`
const port = 8000

const axiosClient = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? `${host}:${port}/api` : `${full}/api`,
});


export const getCarousel = async (url) => {
    try {
        const response = await axiosClient.get(
           url,
            { headers: { Accept: "application/json" } }
        );
     
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getTestimonial= async(url)=>{
    try{
        const response = await axiosClient.get(
           url,
            {headers:{Accept:"application/json"}}
        )
     
        return response.data;
    } catch (error) {
        console.log(error);
    }
    }
export const getSuccessstores = async (url) => {
    try {
        const response = await axiosClient.get(
         url,
            { headers: { Accept: "application/json" } }
        )
       
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const getbanner = async (url) => {
    try {
        const response = await axiosClient.get(
            url,
            { headers: { Accept: "application/json" } }
        )
       
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const postMessagenow = async (url, data) => {
    try {
        const response = await axiosClient.post(
        url,
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
       
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const testPreparation = async (url, data) => {
    try {
        const response = await axiosClient.post(
       url,
            JSON.stringify(data),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
      
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const studyaboardform = async (url, data) => {
    try {
        const response = await axiosClient.post(
          url,
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
       
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
