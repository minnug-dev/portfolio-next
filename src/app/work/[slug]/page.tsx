import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { workText } from '@/constants';
import { getWorkPage } from '@/utils/detail';
import { buildDetailMetadata } from '@/utils/metadata';
import DetailPage from '@/components/DetailPage';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return workText.list.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return buildDetailMetadata(getWorkPage(slug), `/work/${slug}`);
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = getWorkPage(slug);
  if (!data) notFound();

  return <DetailPage data={data} />;
}
