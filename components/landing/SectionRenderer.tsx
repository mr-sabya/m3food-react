import { TopBanner } from './TopBanner';
import { MediaReports } from './MediaReports';
import { ProductVideo } from './ProductVideo';
import { CountdownOffer } from './CountdownOffer';
import { HealthBenefits } from './HealthBenefits';
import { FoodPairing } from './FoodPairing';
import { WhyDifferent } from './WhyDifferent';
import { MarketingBox } from './MarketingBox';
import { FeatureGrid } from './FeatureGrid';
import { InfoText } from './InfoText';
import { CautionWarning } from './CautionWarning';

const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL || 'http://localhost:8000/storage';

export const SectionRenderer = ({ section }: { section: any }) => {
    const { type, content } = section;

    switch (type) {
        case 'title_section':
            return <TopBanner data={content} />;
        case 'video_section':
            return <ProductVideo data={content} />;
        case 'media_news_section':
            return <MediaReports data={content} />;
        case 'countdown_section':
            return <CountdownOffer data={content} />;
        case 'feature_card_section':
            return <FeatureGrid data={content} storageUrl={STORAGE_URL} />;
        case 'marketing_highlight':
            return <MarketingBox data={content} />;
        case 'disclaimer_section':
            return <InfoText data={content} />;
        case 'benefit_section':
            return <HealthBenefits data={content} storageUrl={STORAGE_URL} />;
        case 'usage_section':
            return <FoodPairing data={content} storageUrl={STORAGE_URL} />;
        case 'caution_section':
            return <CautionWarning data={content} />;
        case 'comparison_section':
            return <WhyDifferent data={content} />;
        default:
            return null;
    }
};