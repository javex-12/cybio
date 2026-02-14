export const chap9Content: Record<string, string> = {
  "plant-agri-class": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Classification of Plants</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          In agriculture, plants are grouped by their use and life span.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">Classification by Life Span</h4>
          <ul class="space-y-4 text-xs font-bold italic tracking-tighter text-blue-700 uppercase underline decoration-blue-100 underline-offset-4">
            <li>• <strong>Annuals:</strong> Complete life cycle in one year (Maize, Rice).</li>
            <li>• <strong>Biennials:</strong> Complete life cycle in two years (Carrots, Cassava - for tubers).</li>
            <li>• <strong>Perennials:</strong> Live for many years (Cocoa, Rubber, Oil Palm).</li>
          </ul>
        </div>
        <div class="p-8 bg-slate-900 text-white rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col justify-center">
          <h4 class="text-emerald-400 font-black text-xl mb-4 italic uppercase underline tracking-widest">Classification by Use</h4>
          <p class="text-[10px] text-slate-300 italic mb-6 font-bold leading-relaxed underline underline-offset-8 decoration-slate-700">
            Cereals (Grains), Legumes (Proteins), Tuber crops (Starch), Fibres, and Beverages.
          </p>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic uppercase">CROP</div>
        </div>
      </div>
    </div>
  `,

  "agri-eco-effects": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. Agricultural Activities & Ecosystems</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-indigo-200">
          Farming changes the natural balance of an ecosystem.
        </p>
      </section>

      <div class="space-y-8">
        <div class="p-8 bg-indigo-50 border-2 border-indigo-100 rounded-[2.5rem] shadow-lg">
          <h4 class="text-indigo-800 font-black text-xl mb-4 underline italic uppercase">Bush Burning</h4>
          <p class="text-sm text-slate-600 leading-relaxed italic font-bold">Destroying vegetation by fire.</p>
          <p class="text-[10px] text-slate-500 mt-4 italic font-medium underline decoration-slate-100">Effects: Destroys soil microorganisms, increases erosion, and releases ash (potash) which temporarily improves pH.</p>
        </div>

        <div class="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div class="relative z-10">
            <h4 class="text-emerald-400 font-black text-xl mb-4 underline italic uppercase tracking-tighter">Monoculturing</h4>
            <p class="text-sm text-slate-300 leading-relaxed italic font-bold mb-6">Planting only one type of crop on a piece of land.</p>
            <div class="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs italic underline decoration-slate-700">
              <strong>Atomic Consequence:</strong> Rapid depletion of specific soil nutrients and easy spread of pests specialized for that crop.
            </div>
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic">CROP</div>
        </div>
      </div>
    </div>
  `,

  "agri-pests-diseases": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic">03. Pests & Diseases of Agriculture</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-10 bg-white border-4 border-slate-100 rounded-[3.5rem] shadow-2xl">
          <h4 class="text-rose-600 font-black text-xl italic uppercase underline mb-6">Common Crop Pests</h4>
          <ul class="space-y-4 text-xs font-bold italic tracking-tighter text-slate-600 uppercase underline decoration-rose-50 underline-offset-4">
            <li>• Insects: Locusts, Weevils, Stem borers.</li>
            <li>• Birds: Quela birds (Grains).</li>
            <li>• Rodents: Rats, Cane rats.</li>
          </ul>
        </div>
        <div class="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center border-4 border-blue-500/20">
          <h4 class="text-emerald-400 font-black text-xl mb-4 italic uppercase underline">Plant Diseases</h4>
          <p class="text-[10px] text-slate-300 italic mb-6 font-bold leading-relaxed underline underline-offset-8 decoration-slate-700">
            Caused by Viruses (Mosaic), Bacteria (Blight), and Fungi (Smut, Rust, Blast).
          </p>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">PEST</div>
        </div>
      </div>
    </div>
  `,

  "food-supply-pop": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-blue-500 pb-2 uppercase tracking-tighter italic underline underline-offset-8">04. Population Growth & Food Supply</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-black uppercase tracking-tighter underline decoration-blue-200">
          The balance between the number of mouths to feed and the food available.
        </p>
      </section>

      <div class="p-10 bg-blue-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
        <div class="relative z-10">
          <h4 class="text-emerald-400 font-black text-3xl mb-6 tracking-tighter uppercase underline decoration-emerald-400 italic">The Malthusian Theory</h4>
          <p class="text-sm text-indigo-100 leading-relaxed italic font-bold mb-8 underline decoration-blue-700">
            Thomas Malthus stated that Human Population increases <strong>Geometrically</strong> (2, 4, 8, 16...) while Food Supply increases <strong>Arithmetically</strong> (1, 2, 3, 4...).
          </p>
          <div class="inline-block px-4 py-2 bg-rose-500/20 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-500/30">Atomic Logic: This leads to famine, disease, and war unless production is improved.</div>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic">GAP</div>
      </div>
    </div>
  `
};
