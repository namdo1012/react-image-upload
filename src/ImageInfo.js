import React from "react";
import "./ImageInfo.css";

export class ImageInfo extends React.Component {
  render() {
    const defaultUser = {
      name: "Nguyễn Thị Bích Phương",
      birth: "1986",
      home: "17 Trần Khánh Dư TP Rạch Giá Kiên Giang",
      address: "TP Rạch Giá Kiên Giang",
    };
    return (
      <div className="image__info-container">
        <div className="image__info image__info-name">
          <span className="info__title title-name">Họ và tên: </span>
          {defaultUser.name}
        </div>
        <div className="image__info image__info-birth">
          <span className="info__title title-birth">Năm sinh: </span>
          {defaultUser.birth}
        </div>
        <div className="image__info image__info-home">
          <span className="info__title title-home">Nơi ở: </span>
          {defaultUser.home}
        </div>
        <div className="image__info image__info-address">
          <span className="info__title title-address">Địa chỉ:</span>
          {defaultUser.address}
        </div>
      </div>
    );
  }
}
