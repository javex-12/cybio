export const chap20Content: Record<string, string> = {
  "succession-stages": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Stages of Succession</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          Ecological succession is the <strong>Directional and Predictable</strong> change in the composition of a community over time.
        </p>
      </section>

      <div class="space-y-8">
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">Types of Succession</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-4 bg-white rounded-2xl border border-blue-200 shadow-sm">
              <span class="font-black text-blue-600 uppercase text-xs">Primary Succession:</span>
              <p class="text-xs text-slate-500 italic mt-2">Starts on bare, lifeless substrate (e.g., rock, lava). <strong>Pioneer species</strong> are usually Lichens.</p>
            </div>
            <div class="p-4 bg-white rounded-2xl border border-blue-200 shadow-sm">
              <span class="font-black text-blue-600 uppercase text-xs">Secondary Succession:</span>
              <p class="text-xs text-slate-500 italic mt-2">Starts in areas where life existed but was destroyed (e.g., abandoned farm, burnt forest). <strong>Faster</strong> because soil is present.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900 text-white p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
          <div class="relative z-10">
            <h4 class="text-emerald-400 font-black text-2xl mb-4 italic tracking-tighter uppercase underline">The Climax Community</h4>
            <p class="text-sm text-slate-300 leading-relaxed italic mb-6 font-bold underline underline-offset-8 decoration-slate-700">
              The final, stable stage of succession that remains unchanged as long as the climate stays the same. 
              <br/><br/>
              <strong>Atomic Logic:</strong> High biodiversity, complex food webs, and zero net increase in biomass characterize this stage.
            </p>
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">STABLE</div>
        </div>
      </div>
    </div>
  `,

  "overcrowding": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. Overcrowding: Causes & Effects</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-indigo-200">
          Overcrowding happens when population density exceeds the <strong>Carrying Capacity</strong> of the environment.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-10 bg-white border-4 border-slate-100 rounded-[3.5rem] shadow-2xl">
          <h4 class="text-indigo-600 font-black text-xl italic uppercase underline mb-6">Causes</h4>
          <ul class="space-y-4 text-sm font-bold italic tracking-tighter text-slate-600 uppercase underline decoration-indigo-50 underline-offset-4">
            <li>1. High Natality (Birth rate).</li>
            <li>2. Improved food supply and medical care.</li>
            <li>3. Immigration.</li>
            <li>4. Lack of predators or natural controls.</li>
          </ul>
        </div>
        <div class="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center border-4 border-blue-500/20">
          <h4 class="text-emerald-400 font-black text-xl mb-4 italic uppercase underline">Effects (The Push-Back)</h4>
          <p class="text-sm italic font-black uppercase tracking-tighter underline decoration-slate-700 underline-offset-8 leading-relaxed mb-4">
            • Competition for food and space. <br/>
            • Easy spread of diseases. <br/>
            • Accumulation of toxic waste. <br/>
            • <strong>Cannibalism</strong> (in extreme animal cases).
          </p>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic uppercase">STRESS</div>
        </div>
      </div>
    </div>
  `,

  "population-factors": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic underline">03. Factors Affecting Population</h3>
      </section>

      <div class="space-y-8">
        <div class="p-8 bg-rose-50 border-2 border-rose-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-rose-900 text-lg uppercase mb-4 underline">Biotic Factors</h4>
          <p class="text-sm text-slate-600 leading-relaxed mb-6 font-medium italic underline decoration-rose-200">
            Predation, Parasitism, and Interspecific Competition.
          </p>
        </div>
        <div class="p-8 bg-slate-900 text-white rounded-[3rem] shadow-xl relative overflow-hidden">
          <h4 class="text-amber-400 font-black text-lg uppercase mb-4 underline italic">Abiotic Factors</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs italic font-bold tracking-widest text-slate-300">
            <p>• Climatic: Floods, Droughts, Extreme Temperatures.</p>
            <p>• Geographic: Natural barriers (Mountains, Rivers).</p>
          </div>
          <div class="absolute -right-4 -bottom-4 opacity-10 text-white italic font-black text-6xl">LIMITS</div>
        </div>
      </div>
    </div>
  `
};
