import BasicHero from "../../components/BasicHero/BasicHero.jsx";
import { useTranslation } from "react-i18next";


export default function NotFound() {
  const pageTitle = "Not Found Page";
  return (
    <>
      <BasicHero title={pageTitle} />
    </>
  );
}
