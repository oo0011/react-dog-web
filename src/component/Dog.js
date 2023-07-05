import React, { useEffect, useState } from "react";
import axios from "axios";

const Dog = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const API_KEY = "YOUR_API_KEY"; // 여기에 발급받은 API 키를 넣으세요.
        const endpoint = "https://api.thedogapi.com/";
        const response = await axios.get(
          `${endpoint}v1/images/search?format=json&limit=50`,
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": API_KEY,
            },
          }
        );

        // 응답에서 이미지 URL들을 추출하여 상태에 저장합니다.
        const images = response.data.map((imageData) => imageData.url);
        setImageUrls(images);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDogImages();
  }, []);

  return (
    <div>
      {imageUrls.map((imageUrl) => (
        <img key={imageUrl} src={imageUrl} alt="Dog" />
      ))}
    </div>
  );
};

export default Dog;
