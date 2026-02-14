export const chap11Content: Record<string, string> = {
  "micro-growth": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Growth of Microorganisms</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          Microorganisms reproduce at an exponential rate when conditions are ideal.
        </p>
      </section>

      <div class="p-10 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
        <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline">Conditions for Growth</h4>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-black uppercase tracking-widest text-blue-700 italic">
          <li class="p-4 bg-white rounded-xl border border-blue-200 shadow-sm">1. Nutrient Availability (Carbon, Nitrogen)</li>
          <li class="p-4 bg-white rounded-xl border border-blue-200 shadow-sm">2. Optimum Temperature (usually 37°C)</li>
          <li class="p-4 bg-white rounded-xl border border-blue-200 shadow-sm">3. Moisture (Water content)</li>
          <li class="p-4 bg-white rounded-xl border border-blue-200 shadow-sm">4. Appropriate pH levels</li>
        </ul>
      </div>
    </div>
  `,

  "micro-effects": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic underline underline-offset-8">02. Beneficial & Harmful Microorganisms</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-emerald-50 border-2 border-emerald-100 rounded-[2.5rem] shadow-lg">
          <h4 class="font-black text-emerald-800 text-lg uppercase mb-4 underline">Microorganisms in Medicine</h4>
          <p class="text-xs text-slate-600 leading-relaxed font-bold italic mb-4">
            Production of <strong>Vaccines</strong> and <strong>Antibiotics</strong>. 
            <br/><br/>
            <strong>Atomic Logic:</strong> Vaccines contain weakened pathogens that trigger the immune system to produce antibodies without causing the full disease.
          </p>
        </div>
        <div class="p-8 bg-rose-50 border-2 border-rose-100 rounded-[2.5rem] shadow-lg">
          <h4 class="font-black text-rose-800 text-lg uppercase mb-4 underline">Harmful Microorganisms</h4>
          <p class="text-[10px] text-slate-500 font-bold uppercase mb-4 italic tracking-tighter underline underline-offset-4">Food Spoilage and Disease.</p>
          <ul class="space-y-2 text-xs font-bold italic tracking-tighter uppercase text-rose-700">
            <li>• Food Poisoning: <em>Salmonella</em>, <em>Staphylococcus</em>.</li>
            <li>• Human Diseases: AIDS (Virus), TB (Bacteria), Ringworm (Fungi).</li>
          </ul>
        </div>
      </div>

      <div class="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
        <div class="relative z-10">
          <h4 class="text-emerald-400 font-black text-3xl mb-6 tracking-tighter uppercase underline decoration-emerald-400">Biological Control</h4>
          <p class="text-sm text-slate-300 leading-relaxed italic mb-8 font-bold underline decoration-slate-700">
            Using one microorganism to control another. 
            <br/><br/>
            <strong>Atomic Example:</strong> Using <em>Bacillus thuringiensis</em> (a bacterium) to kill insect larvae that destroy crops.
          </p>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic">CONTROL</div>
      </div>
    </div>
  `
};
