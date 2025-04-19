import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ContactUs.css';
import { Trans, useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import GoogleMap from './GoogleMap/GoogleMap';
import { Helmet } from 'react-helmet-async';

interface FormValues {
    service: string;
    name: string;
    phone: string;
    email: string;
    message: string;
}

function ContactUs() {
    const { state } = useLocation();

    const { t } = useTranslation();
    useEffect(() => {
        document.title = t('CTS | Contact Us');
    });

    const [isSubmitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(''); // New state for error

    const validationSchema = Yup.object().shape({
        service: Yup.string().required(t('Please select a')),
        name: Yup.string()
            .matches(/^[\u0600-\u06FF\sA-Za-z]+$/, t('Please enter a valid name'))
            .required(t('Please enter your name')),
        phone: Yup.string()
            .matches(/^\+?[0-9]+$/, t('Please enter a valid phone number'))
            .required(t('Please enter your phone number')),
        email: Yup.string().email(t('Please enter a valid email')).required(t('Please enter your email')),
        message: Yup.string().required(t('Please enter your message')),
    });

    const handleSubmit = async (values: FormValues) => {
        setSubmitting(true);
        try {
            const response = await fetch('https://cts-egy.com/server/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
            setSubmitted(true);
        } catch (error) {
            setError(t('Failed to submit form. Please try again.')); // Set the error message
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <>
            <Helmet>
                <title>CTS | Contact Us</title>
                <meta
                    name="keywords"
                    content="web development, buy Cisco switch CBS350-24 eg-tech,buy Cisco switch , Cisco switch CBS350-24 eg-tech , IT services, custom software development, website design, technology solutions, responsive web design, mobile app development, software consulting, IT support, digital solutions, e-commerce websites, content management systems, SEO, integrated services, web hosting, business identities, Light Current Solutions, Optical Fiber, Cabling Networks, Voice systems, Call Center systems, CCTV systems, online presence, tailored solutions, technological landscape, drive success forward"
                />
                <meta name="author" content="Core Technology Solutions" />
                <meta
                    name="description"
                    content="Welcome to Core Technology Solutions, the leading provider of comprehensive web development and IT services. With a dedicated team of experts, we specialize in delivering cutting-edge solutions tailored to your unique business needs. From custom software development and innovative website designs to responsive user interfaces and mobile app development, we offer a full spectrum of technology services. Our seasoned consultants provide strategic IT support and guidance, ensuring your digital solutions are aligned with your business goals. Explore how we can enhance your online presence and streamline your operations. Partner with us for unmatched expertise in e-commerce websites, content management systems, and search engine optimization (SEO). Join hands with Core Technology Solutions to embark on a journey of digital excellence and success."
                />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta property="og:title" content="Core Technology Solutions" />
                <meta
                    property="og:description"
                    content="Welcome to Core Technology Solutions, the leading provider of comprehensive web development and IT services. With a dedicated team of experts."
                />
                <meta property="og:image" content="https://www.cts-egy.com/assets/logonavbar.svg" />
                <meta property="og:url" content="https://cts-egy.com/contact-us" />
            </Helmet>
            <div className="container-fluid">
                <div className={`bg-contact-gray   ${submitted ? `handelVH-submited` : 'handelVH-form'} row`}>
                    <div className={`  col-lg-6 col-12 d-flex align-items-center justify-content-center  containForm `}>
                        {submitted ? (
                            <div className="thank-you-message ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="234"
                                    height="234"
                                    viewBox="0 0 234 234"
                                    fill="none"
                                >
                                    <path
                                        d="M118.393 43.4072C102.966 43.4072 87.8852 47.9818 75.0581 56.5526C62.2311 65.1233 52.2336 77.3053 46.33 91.5579C40.4264 105.811 38.8817 121.494 41.8914 136.624C44.901 151.755 52.3298 165.653 63.2383 176.562C74.1468 187.47 88.0451 194.899 103.176 197.908C118.306 200.918 133.989 199.373 148.242 193.47C162.495 187.566 174.676 177.569 183.247 164.742C191.818 151.915 196.393 136.834 196.393 121.407C196.369 100.727 188.144 80.9014 173.521 66.2786C158.898 51.6557 139.072 43.4305 118.393 43.4072ZM118.393 193.836C104.068 193.836 90.0643 189.588 78.1535 181.629C66.2426 173.671 56.9593 162.359 51.4773 149.124C45.9954 135.89 44.5611 121.327 47.3557 107.277C50.1504 93.2273 57.0486 80.3218 67.1779 70.1925C77.3072 60.0632 90.2127 53.165 104.262 50.3704C118.312 47.5757 132.875 49.01 146.11 54.492C159.344 59.9739 170.656 69.2573 178.615 81.1681C186.573 93.0789 190.821 107.082 190.821 121.407C190.799 140.61 183.162 159.02 169.583 172.598C156.005 186.176 137.595 193.814 118.393 193.836Z"
                                        fill="#0BCEB2"
                                    />
                                    <path
                                        d="M161.011 85.992L95.0903 150.86L75.8396 130.629C75.3292 130.099 74.6297 129.792 73.8939 129.776C73.1581 129.76 72.4457 130.035 71.9125 130.542C71.3793 131.05 71.0685 131.747 71.048 132.483C71.0275 133.219 71.2989 133.933 71.8031 134.469L93.0066 156.755C93.2614 157.023 93.567 157.238 93.9056 157.386C94.2442 157.535 94.6091 157.615 94.9789 157.621H95.0262C95.757 157.621 96.4583 157.333 96.979 156.82L164.917 89.9631C165.188 89.7091 165.406 89.4034 165.557 89.064C165.708 88.7247 165.79 88.3585 165.797 87.9871C165.805 87.6157 165.738 87.2465 165.601 86.9013C165.464 86.556 165.259 86.2418 164.998 85.9769C164.738 85.712 164.427 85.5019 164.084 85.359C163.741 85.216 163.373 85.1431 163.002 85.1446C162.63 85.146 162.263 85.2217 161.921 85.3672C161.579 85.5127 161.27 85.7252 161.011 85.992Z"
                                        fill="#2D4356"
                                    />
                                    <path
                                        d="M209.933 204.63H148.007C167.611 197.357 184.035 183.423 194.406 165.266C204.777 147.109 208.434 125.884 204.74 105.302C201.045 84.7211 190.233 66.0937 174.194 52.6777C158.155 39.2616 137.91 31.9109 116.999 31.9109C96.0892 31.9109 75.8444 39.2616 59.8054 52.6777C43.7664 66.0937 32.9541 84.7211 29.2593 105.302C25.5645 125.884 29.2223 147.109 39.5932 165.266C49.9641 183.423 66.3878 197.357 85.9924 204.63H24.066C23.6697 204.578 23.2669 204.612 22.8845 204.728C22.5021 204.844 22.1489 205.041 21.8486 205.305C21.5482 205.568 21.3076 205.893 21.1427 206.257C20.9779 206.621 20.8926 207.016 20.8926 207.416C20.8926 207.815 20.9779 208.211 21.1427 208.575C21.3076 208.939 21.5482 209.263 21.8486 209.527C22.1489 209.791 22.5021 209.987 22.8845 210.104C23.2669 210.22 23.6697 210.253 24.066 210.202H209.933C210.329 210.253 210.732 210.22 211.114 210.104C211.497 209.987 211.85 209.791 212.15 209.527C212.451 209.263 212.691 208.939 212.856 208.575C213.021 208.211 213.106 207.815 213.106 207.416C213.106 207.016 213.021 206.621 212.856 206.257C212.691 205.893 212.451 205.568 212.15 205.305C211.85 205.041 211.497 204.844 211.114 204.728C210.732 204.612 210.329 204.578 209.933 204.63ZM33.4287 121.059C33.4287 104.53 38.3301 88.3721 47.5131 74.6289C56.696 60.8856 69.7481 50.1741 85.0188 43.8488C100.289 37.5234 117.093 35.8684 133.304 39.0931C149.515 42.3177 164.406 50.2771 176.094 61.9648C187.782 73.6524 195.741 88.5434 198.966 104.755C202.19 120.966 200.535 137.769 194.21 153.04C187.885 168.311 177.173 181.363 163.43 190.546C149.687 199.729 133.529 204.63 117 204.63C94.8433 204.605 73.6012 195.792 57.9339 180.125C42.2667 164.458 33.4538 143.215 33.4287 121.059ZM123.268 24.6033C124.094 24.6033 124.902 24.3583 125.59 23.8991C126.277 23.44 126.812 22.7874 127.129 22.0238C127.445 21.2603 127.528 20.4201 127.366 19.6096C127.205 18.799 126.807 18.0544 126.223 17.4701C125.638 16.8857 124.894 16.4877 124.083 16.3265C123.273 16.1652 122.432 16.248 121.669 16.5643C120.905 16.8805 120.253 17.4161 119.794 18.1033C119.335 18.7904 119.089 19.5983 119.089 20.4248C119.091 21.5326 119.531 22.5948 120.315 23.3782C121.098 24.1616 122.16 24.6022 123.268 24.6033ZM123.268 18.3355C123.681 18.3355 124.085 18.458 124.429 18.6876C124.772 18.9172 125.04 19.2435 125.198 19.6252C125.356 20.007 125.398 20.4271 125.317 20.8324C125.237 21.2376 125.038 21.6099 124.745 21.9021C124.453 22.1943 124.081 22.3933 123.676 22.4739C123.27 22.5545 122.85 22.5131 122.468 22.355C122.087 22.1969 121.76 21.9291 121.531 21.5855C121.301 21.2419 121.179 20.838 121.179 20.4248C121.179 19.8708 121.399 19.3396 121.791 18.9478C122.183 18.5561 122.714 18.3358 123.268 18.3355ZM220.496 94.5944C219.945 94.5944 219.407 94.7578 218.949 95.0639C218.491 95.37 218.134 95.805 217.923 96.3141C217.712 96.8231 217.657 97.3832 217.764 97.9236C217.872 98.464 218.137 98.9603 218.527 99.3499C218.916 99.7395 219.413 100.005 219.953 100.112C220.493 100.22 221.053 100.165 221.562 99.9538C222.071 99.7429 222.507 99.3859 222.813 98.9278C223.119 98.4697 223.282 97.9311 223.282 97.3801C223.281 96.6415 222.988 95.9334 222.465 95.4111C221.943 94.8889 221.235 94.5951 220.496 94.5944ZM220.496 98.773C220.221 98.773 219.952 98.6913 219.723 98.5382C219.494 98.3852 219.315 98.1676 219.21 97.9131C219.104 97.6586 219.077 97.3786 219.13 97.1084C219.184 96.8382 219.317 96.59 219.512 96.3952C219.706 96.2004 219.954 96.0678 220.225 96.014C220.495 95.9603 220.775 95.9879 221.029 96.0933C221.284 96.1987 221.501 96.3772 221.655 96.6063C221.808 96.8353 221.889 97.1046 221.889 97.3801C221.889 97.7494 221.742 98.1035 221.481 98.3646C221.22 98.6257 220.866 98.7726 220.496 98.773ZM181.072 4.98633C180.521 4.98633 179.982 5.14971 179.524 5.45581C179.066 5.7619 178.709 6.19697 178.498 6.706C178.287 7.21502 178.232 7.77513 178.339 8.31551C178.447 8.85588 178.712 9.35225 179.102 9.74184C179.491 10.1314 179.988 10.3967 180.528 10.5042C181.068 10.6117 181.629 10.5566 182.138 10.3457C182.647 10.1349 183.082 9.77781 183.388 9.3197C183.694 8.86159 183.857 8.323 183.857 7.77204C183.857 7.03345 183.563 6.32532 183.041 5.80306C182.518 5.2808 181.81 4.98707 181.072 4.98633ZM181.072 9.1649C180.796 9.1649 180.527 9.08321 180.298 8.93016C180.069 8.77711 179.89 8.55958 179.785 8.30507C179.679 8.05055 179.652 7.7705 179.705 7.50031C179.759 7.23012 179.892 6.98194 180.087 6.78714C180.281 6.59235 180.53 6.45969 180.8 6.40595C181.07 6.3522 181.35 6.37979 181.605 6.48521C181.859 6.59063 182.077 6.76916 182.23 6.99821C182.383 7.22727 182.464 7.49656 182.464 7.77204C182.464 8.14134 182.317 8.4954 182.056 8.75653C181.795 9.01766 181.441 9.16453 181.072 9.1649ZM224.714 21.2368C224.163 21.2368 223.624 21.4002 223.166 21.7063C222.708 22.0124 222.351 22.4474 222.14 22.9565C221.929 23.4655 221.874 24.0256 221.982 24.566C222.089 25.1063 222.355 25.6027 222.744 25.9923C223.134 26.3819 223.63 26.6472 224.171 26.7547C224.711 26.8622 225.271 26.807 225.78 26.5962C226.289 26.3853 226.724 26.0283 227.03 25.5702C227.336 25.1121 227.5 24.5735 227.5 24.0225C227.499 23.2839 227.205 22.5758 226.683 22.0535C226.161 21.5313 225.453 21.2375 224.714 21.2368ZM224.714 25.4154C224.438 25.4154 224.169 25.3337 223.94 25.1806C223.711 25.0276 223.533 24.81 223.427 24.5555C223.322 24.301 223.294 24.021 223.348 23.7508C223.402 23.4806 223.534 23.2324 223.729 23.0376C223.924 22.8428 224.172 22.7102 224.442 22.6564C224.712 22.6027 224.992 22.6303 225.247 22.7357C225.502 22.8411 225.719 23.0196 225.872 23.2487C226.025 23.4777 226.107 23.747 226.107 24.0225C226.106 24.3918 225.96 24.7459 225.698 25.007C225.437 25.2681 225.083 25.415 224.714 25.4154ZM42.2107 42.5935C42.2107 42.0425 42.0473 41.5039 41.7412 41.0458C41.4351 40.5877 41.0001 40.2306 40.491 40.0198C39.982 39.809 39.4219 39.7538 38.8815 39.8613C38.3411 39.9688 37.8448 40.2341 37.4552 40.6237C37.0656 41.0133 36.8003 41.5096 36.6928 42.05C36.5853 42.5904 36.6405 43.1505 36.8513 43.6595C37.0622 44.1685 37.4192 44.6036 37.8773 44.9097C38.3354 45.2158 38.874 45.3792 39.425 45.3792C40.1636 45.3784 40.8717 45.0847 41.394 44.5625C41.9162 44.0402 42.21 43.3321 42.2107 42.5935ZM38.0321 42.5935C38.0321 42.318 38.1138 42.0487 38.2669 41.8196C38.4199 41.5906 38.6375 41.4121 38.892 41.3066C39.1465 41.2012 39.4265 41.1736 39.6967 41.2274C39.9669 41.2811 40.2151 41.4138 40.4099 41.6086C40.6047 41.8034 40.7373 42.0515 40.7911 42.3217C40.8448 42.5919 40.8172 42.872 40.7118 43.1265C40.6064 43.381 40.4279 43.5985 40.1988 43.7516C39.9698 43.9046 39.7005 43.9863 39.425 43.9863C39.0557 43.986 38.7016 43.8391 38.4405 43.578C38.1794 43.3168 38.0325 42.9628 38.0321 42.5935Z"
                                        fill="#2D4356"
                                    />
                                    <path
                                        d="M15.1657 94.6098L17.2368 91.8854L15.9289 91.1444L14.5988 94.1947H14.5556L13.2045 91.1667L11.8743 91.9286L13.9232 94.5889V94.6321L10.7183 94.217V95.699L13.9441 95.2853V95.3285L11.8743 97.9875L13.1154 98.7731L14.5333 95.699H14.5765L15.8844 98.7508L17.2577 97.9666L15.1657 95.3508V95.3062L18.4556 95.699V94.217L15.1657 94.653V94.6098ZM16.9402 8.68863L15.7479 10.2194L16.4624 10.6721L17.2786 8.90173H17.3037L18.0572 10.6595L18.8484 10.2068L17.6435 8.70116V8.67609L19.5378 8.90173V8.04791L17.6435 8.30002V8.27495L18.8358 6.7052L18.0823 6.27898L17.3176 8.03538H17.2912L16.5139 6.29152L15.7479 6.73027L16.9276 8.26241V8.28748L15.0821 8.04791V8.90173L16.9402 8.66355V8.68863ZM90.9608 8.76663V7.31248L87.7335 7.74009V7.69691L89.7643 5.02541L88.4815 4.29834L87.1778 7.29159H87.1346L85.81 4.31923L84.5049 5.06859L86.5148 7.67602V7.7192L83.3711 7.31248V8.76663L86.5357 8.35991V8.40309L84.5049 11.0105L85.7236 11.7808L87.1137 8.76663H87.1555L88.4383 11.7585L89.7852 10.9896L87.7335 8.42398V8.3808L90.9608 8.76663ZM193.41 49.9186L195.162 47.6134L194.054 46.9866L192.93 49.5676H192.893L191.751 47.0047L190.624 47.6496L192.358 49.9005V49.9367L189.647 49.5857V50.8393L192.376 50.4897V50.5273L190.624 52.7753L191.675 53.4397L192.875 50.8393H192.911L194.017 53.4216L195.18 52.7572L193.41 50.5454V50.5078L196.193 50.8393V49.5857L193.41 49.9548V49.9186Z"
                                        fill="#0BCEB2"
                                    />
                                    <path
                                        d="M2.78571 210.202C4.32422 210.202 5.57143 208.955 5.57143 207.416C5.57143 205.878 4.32422 204.63 2.78571 204.63C1.24721 204.63 0 205.878 0 207.416C0 208.955 1.24721 210.202 2.78571 210.202Z"
                                        fill="#2D4356"
                                    />
                                    <path
                                        d="M15.3212 204.63H11.1426C10.4038 204.63 9.69527 204.924 9.17285 205.446C8.65043 205.969 8.35693 206.677 8.35693 207.416C8.35693 208.155 8.65043 208.863 9.17285 209.386C9.69527 209.908 10.4038 210.202 11.1426 210.202H15.3212C16.06 210.202 16.7686 209.908 17.291 209.386C17.8134 208.863 18.1069 208.155 18.1069 207.416C18.1069 206.677 17.8134 205.969 17.291 205.446C16.7686 204.924 16.06 204.63 15.3212 204.63ZM222.857 204.63H218.678C217.94 204.63 217.231 204.924 216.709 205.446C216.186 205.969 215.893 206.677 215.893 207.416C215.893 208.155 216.186 208.863 216.709 209.386C217.231 209.908 217.94 210.202 218.678 210.202H222.857C223.596 210.202 224.304 209.908 224.827 209.386C225.349 208.863 225.643 208.155 225.643 207.416C225.643 206.677 225.349 205.969 224.827 205.446C224.304 204.924 223.596 204.63 222.857 204.63Z"
                                        fill="#2D4356"
                                    />
                                    <path
                                        d="M231.214 210.202C232.753 210.202 234 208.955 234 207.416C234 205.878 232.753 204.63 231.214 204.63C229.676 204.63 228.429 205.878 228.429 207.416C228.429 208.955 229.676 210.202 231.214 210.202Z"
                                        fill="#2D4356"
                                    />
                                    <path
                                        d="M164.572 215.773H153C152.298 215.827 151.643 216.144 151.165 216.661C150.687 217.177 150.422 217.855 150.422 218.559C150.422 219.262 150.687 219.94 151.165 220.456C151.643 220.973 152.298 221.29 153 221.344H164.572C165.273 221.29 165.928 220.973 166.406 220.456C166.884 219.94 167.15 219.262 167.15 218.559C167.15 217.855 166.884 217.177 166.406 216.661C165.928 216.144 165.273 215.827 164.572 215.773ZM81.0001 215.773H69.4282C68.7267 215.827 68.0715 216.144 67.5935 216.661C67.1156 217.177 66.8501 217.855 66.8501 218.559C66.8501 219.262 67.1156 219.94 67.5935 220.456C68.0715 220.973 68.7267 221.29 69.4282 221.344H81.0001C81.7016 221.29 82.3568 220.973 82.8348 220.456C83.3127 219.94 83.5782 219.262 83.5782 218.559C83.5782 217.855 83.3127 217.177 82.8348 216.661C82.3568 216.144 81.7016 215.827 81.0001 215.773ZM144.857 215.773H89.1427C88.4039 215.773 87.6953 216.066 87.1729 216.589C86.6505 217.111 86.357 217.82 86.357 218.559C86.357 219.297 86.6505 220.006 87.1729 220.528C87.6953 221.051 88.4039 221.344 89.1427 221.344H111.345V224.13H100.286C99.5468 224.13 98.8382 224.424 98.3158 224.946C97.7934 225.468 97.4999 226.177 97.4999 226.916C97.4999 227.655 97.7934 228.363 98.3158 228.886C98.8382 229.408 99.5468 229.702 100.286 229.702H135.107C135.846 229.702 136.554 229.408 137.077 228.886C137.599 228.363 137.893 227.655 137.893 226.916C137.893 226.177 137.599 225.468 137.077 224.946C136.554 224.424 135.846 224.13 135.107 224.13H122.655V221.344H144.857C145.596 221.344 146.304 221.051 146.827 220.528C147.349 220.006 147.643 219.297 147.643 218.559C147.643 217.82 147.349 217.111 146.827 216.589C146.304 216.066 145.596 215.773 144.857 215.773Z"
                                        fill="#0BCEB2"
                                    />
                                </svg>
                                <h2>
                                    <Trans i18nKey="Thank you"></Trans>
                                </h2>
                                <h6>
                                    <Trans i18nKey="Your request has been sent, our team will contact you as soon as possible."></Trans>
                                </h6>
                            </div>
                        ) : (
                            <>
                                <Formik
                                    initialValues={{
                                        service: '',
                                        name: '',
                                        phone: '',
                                        email: '',
                                        message: '',
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    <Form className="w-100 m-auto  py-4  ">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h1 className="text-center fs-3">
                                                <Trans i18nKey="Call us"></Trans>
                                            </h1>
                                            <p className="text-center mb-0">
                                                <Trans i18nKey="Response will be made within 24 hours"></Trans>
                                            </p>{' '}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="service" className="form-label">
                                                <Trans i18nKey="the service"></Trans>
                                            </label>
                                            <Field as="select" name="service" className="form-select" required>
                                                <option selected={!state ? true : false} value="" disabled>
                                                    <Trans i18nKey="Choose the service"></Trans>
                                                </option>
                                                <option value="تصميم موقع الكترونى">
                                                    <Trans i18nKey="Request a website design"></Trans>
                                                </option>
                                                <option
                                                    selected={state?.name == 'webdesign' ? true : false}
                                                    value="تصميم موقع شركة"
                                                >
                                                    <Trans i18nKey="Request a Company Website design"></Trans>
                                                </option>
                                                <option value="تصميم Landing Page">
                                                    <Trans i18nKey="Request a Landing Page design"></Trans>
                                                </option>
                                                <option
                                                    selected={state?.name == 'onlineStore' ? true : false}
                                                    value="تصميم متجر الكترونى"
                                                >
                                                    <Trans i18nKey="Request an online store design"></Trans>
                                                </option>
                                                <option
                                                    selected={state?.name == 'mobileApp' ? true : false}
                                                    value="برمجة تطبيقات الجوال"
                                                >
                                                    <Trans i18nKey="Mobile application programming"></Trans>
                                                </option>
                                                <option
                                                    selected={state?.name == 'wordpress' ? true : false}
                                                    value="برمجة مواقع ووردبريس WordPress"
                                                >
                                                    <Trans i18nKey="WordPress website programming"></Trans>
                                                </option>
                                                <option
                                                    selected={state?.name == 'hosting' ? true : false}
                                                    value="استضافة موقع"
                                                >
                                                    <Trans i18nKey="Website hosting"></Trans>
                                                </option>
                                                <option selected={state?.name == 'SEO' ? true : false} value="SEO">
                                                    <Trans i18nKey="SEO"></Trans>
                                                </option>
                                                <option value="تصميم وتركيب البنية التحتية لأنظمة التكنولوجيا">
                                                    <Trans i18nKey="Design and installation of infrastructure for technology systems"></Trans>
                                                </option>
                                            </Field>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">
                                                <Trans i18nKey="Name"></Trans>
                                            </label>
                                            <Field type="text" name="name" className="form-control name-input-with-icon" />
                                            <ErrorMessage name="name" component="div" className="error-message" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">
                                                <Trans i18nKey="Phone"></Trans>
                                            </label>
                                            <Field type="tel" name="phone" className="form-control" />
                                            <ErrorMessage name="phone" component="div" className="error-message" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">
                                                <Trans i18nKey="E-mail"></Trans>
                                            </label>
                                            <Field
                                                type="email"
                                                name="email"
                                                className="form-control email-input-with-icon pe-5"
                                            />
                                            <ErrorMessage name="email" component="div" className="error-message" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">
                                                <Trans i18nKey="Your message"></Trans>
                                            </label>
                                            <Field as="textarea" name="message" className="form-control" rows="3" />
                                            <ErrorMessage name="message" component="div" className="error-message" />
                                        </div>

                                        {error && <div className="form-error-message ">{error}</div>}

                                        <button
                                            type="submit"
                                            className="btn btn-submit d-flex w-75 rounded-5  m-auto"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <span
                                                    className="spinner-border spinner-border-sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                ></span>
                                            ) : (
                                                <Trans i18nKey="send"></Trans>
                                            )}
                                        </button>
                                    </Form>
                                </Formik>
                            </>
                        )}
                    </div>
                    <div className="col-lg-6 col-12 d-flex align-items-end flex-column  justify-content-between">
                        <div className=" fs-6  d-flex flex-column justify-content-evenly align-items-start h-50 w-100">
                            <div className=" mx-2 py-lg-0 py-3  d-inline-flex justify-content-center align-items-center">
                                <img className="mx-3" src="/assets/svg/location.webp" alt="" />
                                <span>
                                    <Trans i18nKey="Cairo, Maadi Corniche St. Police Information Institute"></Trans>
                                </span>{' '}
                            </div>
                            <div className="d-flex  py-lg-0 pb-3 justify-content-between">
                                <div className=" mx-2    d-inline-flex justify-content-center align-items-center">
                                    <img className="mx-3" src="/assets/svg/phone.webp" alt="" />

                                    <span>
                                        <Trans i18nKey="(+20)1201117955"></Trans>
                                    </span>
                                </div>{' '}
                                <div className=" mx-2   d-inline-flex justify-content-center align-items-center">
                                    <img className="mx-3" src="/assets/svg/telephone.webp" alt="" />

                                    <span>
                                        <Trans i18nKey="0227634002"></Trans>
                                    </span>
                                </div>{' '}
                            </div>
                            <div className=" mx-2  py-lg-0 pb-3  d-inline-flex justify-content-center align-items-center">
                                <img className="mx-3" src="/assets/svg/location.webp" alt="" />
                                <span>
                                    <Trans i18nKey="Jeddah, King Fahd Road, Al Jazeera Building, Building 3"></Trans>
                                </span>{' '}
                            </div>
                            <div className=" mx-2    d-inline-flex justify-content-center align-items-center">
                                <img className="mx-3" src="/assets/svg/phone.webp" alt="" />

                                <span>
                                    <Trans i18nKey="(+966)542714543"></Trans>
                                </span>
                            </div>{' '}
                        </div>
                        <div className=" w-100 m-auto ">
                            <GoogleMap />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ContactUs;
