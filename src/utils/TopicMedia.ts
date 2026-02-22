export const getTopicImage = (_slug: string, title: string): string | null => {
  const t = title.toLowerCase();
  
  if (t.includes('brain')) return DIAGRAMS.brain;
  if (t.includes('eye')) return DIAGRAMS.eye;
  if (t.includes('cell')) return DIAGRAMS.cell;
  if (t.includes('heart')) return DIAGRAMS.heart;
  
  // Fallbacks for other topics
  if (t.includes('blood')) return 'https://images.unsplash.com/photo-1579152276502-54b3015754c9?auto=format&fit=crop&q=80&w=800';
  if (t.includes('dna') || t.includes('genetic')) return 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800';
  
  return 'https://images.unsplash.com/photo-1532187875605-1ef6c237bb58?auto=format&fit=crop&q=80&w=800';
};
