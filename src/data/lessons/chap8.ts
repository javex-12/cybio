export const chap8Content: Record<string, string> = {
  "eco-components": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Components of an Ecosystem</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          An ecosystem is a functional unit. It is composed of <strong>Biotic</strong> (Living) and <strong>Abiotic</strong> (Non-Living) parts.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">Biotic Components</h4>
          <ul class="space-y-4 text-xs font-bold italic tracking-tighter text-blue-700 uppercase underline decoration-blue-100 underline-offset-4">
            <li>• <strong>Producers:</strong> Autotrophs (Green plants).</li>
            <li>• <strong>Consumers:</strong> Heterotrophs (Animals).</li>
            <li>• <strong>Decomposers:</strong> Saprotrophs (Fungi, Bacteria).</li>
          </ul>
        </div>
        <div class="p-8 bg-slate-900 text-white rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col justify-center">
          <h4 class="text-emerald-400 font-black text-xl mb-4 italic uppercase underline tracking-widest">Abiotic Components</h4>
          <p class="text-[10px] text-slate-300 italic mb-6 font-bold leading-relaxed underline underline-offset-8 decoration-slate-700">
            Inorganic substances (CO2, H2O, Nitrogen) and physical factors (Light, Temperature, Pressure).
          </p>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic uppercase">Inert</div>
        </div>
      </div>
    </div>
  `,

  "food-chains": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. Food Chains & Food Webs</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-indigo-200">
          Energy moves in one direction: <strong>Solar → Chemical → Heat</strong>.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-indigo-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <h4 class="text-emerald-400 font-black text-xl mb-4 underline italic uppercase">Food Chain</h4>
          <p class="text-sm text-indigo-100 leading-relaxed italic font-bold mb-6">A linear sequence of who eats whom.</p>
          <div class="p-4 bg-white/5 rounded-2xl border border-white/10 text-[10px] italic tracking-widest">
            Grass → Grasshopper → Toad → Snake → Hawk
          </div>
        </div>
        <div class="p-8 bg-white border-2 border-indigo-100 rounded-[2.5rem] shadow-lg">
          <h4 class="text-indigo-800 font-black text-xl mb-4 underline italic uppercase">Food Web</h4>
          <p class="text-sm text-slate-600 leading-relaxed italic font-bold">A complex network of interconnected food chains.</p>
          <p class="text-[10px] text-slate-500 mt-4 italic font-medium underline decoration-slate-100">Atomic Logic: Food webs are more stable than food chains because an organism has multiple food sources.</p>
        </div>
      </div>

      <div class="bg-indigo-50 p-10 rounded-[3.5rem] border-2 border-indigo-100 relative shadow-xl">
        <h4 class="text-indigo-900 font-black text-2xl mb-4 italic uppercase underline tracking-tighter">Trophic Levels</h4>
        <p class="text-sm text-indigo-700 leading-relaxed italic font-black uppercase tracking-tighter mb-6 underline decoration-indigo-200 underline-offset-8">The feeding position of an organism in a chain.</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] font-black uppercase text-center">
          <div class="p-2 bg-white rounded-lg shadow-sm">1st: Producers</div>
          <div class="p-2 bg-white rounded-lg shadow-sm">2nd: Primary Consumers</div>
          <div class="p-2 bg-white rounded-lg shadow-sm">3rd: Secondary Consumers</div>
          <div class="p-2 bg-white rounded-lg shadow-sm">4th: Tertiary Consumers</div>
        </div>
      </div>
    </div>
  `,

  "energy-nutrient-flow": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic underline">03. Energy Flow & Nutrient Cycling</h3>
      </section>

      <!-- Energy Flow -->
      <div class="p-10 bg-rose-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
        <div class="relative z-10">
          <h4 class="text-emerald-400 font-black text-3xl mb-6 tracking-tighter uppercase underline decoration-emerald-400">The 10% Rule</h4>
          <p class="text-sm text-rose-100 leading-relaxed italic mb-8 font-bold">
            Only about 10% of the energy at one trophic level is passed to the next. The rest is lost as <strong>HEAT</strong>.
          </p>
          <div class="inline-block px-4 py-2 bg-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/30">Atomic Result: Energy flow is UNIDIRECTIONAL.</div>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic uppercase">Loss</div>
      </div>

      <!-- Nutrient Cycle -->
      <div class="p-10 bg-indigo-50 border-2 border-indigo-100 rounded-[3.5rem] shadow-xl">
        <h4 class="text-indigo-900 font-black text-2xl mb-6 italic tracking-widest uppercase underline">Nutrient Cycling</h4>
        <p class="text-sm text-indigo-600 leading-relaxed italic font-bold mb-6 underline decoration-indigo-200 underline-offset-8">
          Unlike energy, nutrients are <strong>RECYCLED</strong>.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs italic font-bold uppercase tracking-tighter">
          <p class="p-4 bg-white rounded-2xl border border-indigo-200">Nitrogen Cycle: Essential for building proteins.</p>
          <p class="p-4 bg-white rounded-2xl border border-indigo-200">Carbon Cycle: Balanced by Photosynthesis and Respiration.</p>
        </div>
      </div>
    </div>
  `
};
