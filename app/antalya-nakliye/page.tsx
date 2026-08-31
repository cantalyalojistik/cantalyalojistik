import { ServiceDetail } from '@/components/service-detail';
import { createServiceMetadata, servicePages } from '@/lib/service-pages';

export const metadata = createServiceMetadata('antalya-nakliye');

export default function AntalyaNakliyePage() {
  return <ServiceDetail service={servicePages['antalya-nakliye']} />;
}
