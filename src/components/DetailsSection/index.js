import './style.css';

import LogoSection from '../LogoSection/index';
import TitleSection from '../TitleSection/index';
import DescriptionSection from '../DescriptionSection/index';
import FormSection from '../FormSection/index';

const DetailsSection = () => {
  return (
    <div className="details-container col-md-6 col-sm-8">
      <LogoSection/>
      <TitleSection/>
      <DescriptionSection/>
      <FormSection/>
    </div>
  )
}

export default DetailsSection;