import React from "react";
import { SectionSC } from "UI/StyledComponents/SectionSC";
import { styled } from "@mui/material";
import SectionTitleUI from "UI/SectionTitleUI/SectionTitleUI";
import { websiteNavObj } from "lib/mock/websiteNav";
import { ContainerSC } from "UI/StyledComponents/ContainerSC";

const Map = () => {
  return (
    <ContainerSC>
      <CustomSectionSC>
        <SectionTitleUI href={websiteNavObj.Location.href}>
          Местонахождение офиса
        </SectionTitleUI>
        <MapContainerSC>
          <a
            href="https://yandex.ru/maps/56/chelyabinsk/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0x",
            }}>
            Челябинск
          </a>
          <a
            href="https://yandex.ru/maps/56/chelyabinsk/house/prospekt_lenina_21v/YkgYcgVmS0MOQFtvfX13cXhkZw==/?ll=61.425766%2C55.158943&utm_medium=mapframe&utm_source=maps&z=16.79"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}>
            Проспект Ленина, 21В на карте Челябинска — Яндекс Карты
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/-/CCUvnIsuPD"
            width="100%"
            height="100%"
            allowFullScreen={true}
            style={{
              position: "relative",
            }}></iframe>
        </MapContainerSC>
      </CustomSectionSC>
    </ContainerSC>
  );
};

const MapContainerSC = styled("div")`
  position: relative;
  overflow: hidden;
  height: 800px;
  border-radius: 20px;
  margin: 0 5px 0;
  @media (max-width: 1024px) {
    height: 600px;
  }
  @media (max-width: 500px) {
    height: 400px;
  }
`;

const CustomSectionSC = styled(SectionSC)``;

export default React.memo(Map);
