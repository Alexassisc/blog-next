export function generateStaticParams() {
  return [{ id: '1' }];
}

export default async function Usuario({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1> Usuário: {id}</h1>
    </div>
  );
}
