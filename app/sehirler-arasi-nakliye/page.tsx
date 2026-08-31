import { ServiceDetail } from '@/components/service-detail';
import { createServiceMetadata, servicePages } from '@/lib/service-pages';

export const metadata = createServiceMetadata('sehirler-arasi-nakliye');

export default function SehirlerArasiNakliyePage() {
  return <ServiceDetail service={servicePages['sehirler-arasi-nakliye']} />;
}
