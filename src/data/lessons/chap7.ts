export const chap7Content: Record<string, string> = {
  "eco-concepts": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Ecological Concepts</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8 uppercase">
          Ecology is the study of organisms in their home. It is the science of <strong>Interactions</strong>.
        </p>
      </section>

      <div class="space-y-8">
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">Basic Terminology</h4>
          <ul class="space-y-4 text-sm font-medium text-slate-700 italic underline decoration-blue-100 underline-offset-4">
            <li>• <strong>Biosphere:</strong> The part of the earth where life exists.</li>
            <li>• <strong>Ecosystem:</strong> A self-supporting unit consisting of a community and its non-living environment.</li>
            <li>• <strong>Community:</strong> All the populations of different species living in a habitat.</li>
            <li>• <strong>Population:</strong> A group of organisms of the same species in a specific area.</li>
          </ul>
        </div>
        
        <div class="bg-slate-900 text-white p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
          <h4 class="text-emerald-400 font-black text-2xl mb-4 italic tracking-tighter uppercase underline">Ecological Niche</h4>
          <p class="text-sm text-slate-300 leading-relaxed italic mb-6 font-bold underline underline-offset-8 decoration-slate-700">
            The specific "profession" or role of an organism in its habitat. 
            <br/><br/>
            <strong>Atomic Logic:</strong> No two species can occupy the same niche in the same habitat for long (Competitive Exclusion Principle).
          </p>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">NICHE</div>
        </div>
      </div>
    </div>
  `,

  "habitats": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. Habitats: The Address of Life</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-indigo-200">
          A habitat is the place where an organism lives and thrives.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-black italic tracking-tighter uppercase">
        <div class="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 shadow-sm">
          <h5 class="text-blue-600 mb-2">Aquatic</h5>
          <p class="text-[10px] text-slate-500">Marine (Saltwater), Freshwater, and Estuarine.</p>
        </div>
        <div class="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 shadow-sm">
          <h5 class="text-emerald-600 mb-2">Terrestrial</h5>
          <p class="text-[10px] text-slate-500">Forest, Grassland, Arid lands (Desert).</p>
        </div>
        <div class="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100 shadow-sm">
          <h5 class="text-amber-600 mb-2">Arboreal</h5>
          <p class="text-[10px] text-slate-500">Organisms that live primarily in trees.</p>
        </div>
      </div>
    </div>
  `,

  "habitat-factors": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic">03. Ecological Factors</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-10 bg-white border-4 border-slate-100 rounded-[3.5rem] shadow-2xl">
          <h4 class="text-rose-600 font-black text-xl italic uppercase underline mb-6">Abiotic (Non-Living)</h4>
          <ul class="space-y-4 text-xs font-bold italic tracking-tighter text-slate-600 uppercase underline decoration-rose-50 underline-offset-4">
            <li>1. Climatic: Temp, Light, Rainfall, Humidity.</li>
            <li>2. Edaphic: Soil pH, Texture, Water capacity.</li>
            <li>3. Topographic: Altitude, Slope.</li>
          </ul>
        </div>
        <div class="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center border-4 border-blue-500/20">
          <h4 class="text-emerald-400 font-black text-xl mb-4 italic uppercase underline">Biotic (Living)</h4>
          <p class="text-[10px] text-slate-300 italic mb-6 font-bold leading-relaxed underline underline-offset-8 decoration-slate-700">
            Interactions between living things: Competition, Predation, Parasitism, and Symbiosis.
          </p>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">LIFE</div>
        </div>
      </div>
    </div>
  `,

  "population-studies": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-blue-500 pb-2 uppercase tracking-tighter italic underline underline-offset-8">04. Population Studies</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-black uppercase tracking-tighter">
          Measuring the abundance and distribution of organisms.
        </p>
      </section>

      <div class="space-y-8">
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem]">
          <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline">Sampling Methods</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p class="p-4 bg-white rounded-xl text-xs font-bold italic border border-blue-200 uppercase tracking-tighter">1. Quadrat: For small, slow-moving or stationary organisms.</p>
            <p class="p-4 bg-white rounded-xl text-xs font-bold italic border border-blue-200 uppercase tracking-tighter">2. Capture-Recapture: For fast-moving animals (N = n1 * n2 / m).</p>
          </div>
        </div>
        
        <div class="bg-blue-900 text-white p-10 rounded-[3.5rem] shadow-2xl">
          <h4 class="text-emerald-400 font-black text-sm uppercase tracking-widest mb-4">Atomic Formula: Growth Rate</h4>
          <p class="text-sm italic font-bold underline decoration-blue-700 underline-offset-8 leading-relaxed mb-4">
            Rate = (Natality + Immigration) - (Mortality + Emigration).
          </p>
          <p class="text-xs text-blue-200 italic font-medium">JAMB Trap: When Natality exceeds Mortality, the population increases.</p>
        </div>
      </div>
    </div>
  `,

  "communities": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">05. Communities: Successional Flow</h3>
      </section>

      <div class="p-10 bg-indigo-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
        <div class="relative z-10">
          <h4 class="text-emerald-400 font-black text-2xl mb-6 tracking-tighter uppercase underline italic">Ecological Succession</h4>
          <p class="text-sm text-indigo-100 leading-relaxed italic font-bold underline decoration-indigo-700 mb-8">
            The gradual change in the composition of a community over time.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 bg-white/5 rounded-2xl border border-white/10 italic">
              <h5 class="text-indigo-300 font-black mb-2 uppercase text-xs">Primary Succession</h5>
              <p class="text-[10px]">Starts from bare rock (no life). Initial organisms are <strong>Pioneer Species</strong> (Lichens).</p>
            </div>
            <div class="p-6 bg-white/5 rounded-2xl border border-white/10 italic">
              <h5 class="text-indigo-300 font-black mb-2 uppercase text-xs">Secondary Succession</h5>
              <p class="text-[10px]">Starts from disturbed area (soil exists). Faster than primary. <br/>Example: After a forest fire.</p>
            </div>
          </div>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic">SUCCESSION</div>
      </div>
    </div>
  `,

  "biomes": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-emerald-600 pb-2 uppercase tracking-tighter italic underline underline-offset-8">06. Local & World Biomes</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-emerald-200">
          Biomes are large ecosystems characterized by climate and vegetation.
        </p>
      </section>

      <div class="space-y-8">
        <!-- Local -->
        <div class="p-8 bg-emerald-50 border-2 border-emerald-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-emerald-900 text-lg uppercase mb-4 underline italic">Nigerian Local Biomes</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-widest text-emerald-700 italic">
            <p class="p-4 bg-white rounded-xl border border-emerald-200 shadow-sm">1. Rain Forest: South, high rainfall, tall trees.</p>
            <p class="p-4 bg-white rounded-xl border border-emerald-200 shadow-sm">2. Guinea Savanna: Central, tall grass, scattered trees.</p>
            <p class="p-4 bg-white rounded-xl border border-emerald-200 shadow-sm">3. Sudan Savanna: North, short grass, drought resistant trees.</p>
            <p class="p-4 bg-white rounded-xl border border-emerald-200 shadow-sm">4. Sahel Savanna: Far North, desert-like, sparse vegetation.</p>
          </div>
        </div>

        <!-- World -->
        <div class="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden">
          <h4 class="text-blue-400 font-black text-2xl mb-6 italic tracking-tighter uppercase underline decoration-blue-700">World Biomes</h4>
          <ul class="space-y-4 text-sm font-black italic tracking-widest text-slate-300 uppercase underline decoration-slate-700 underline-offset-8">
            <li>• Tropical Rainforest: Greatest Biodiversity.</li>
            <li>• Tundra: Extremely cold, permafrost soil.</li>
            <li>• Desert: Extremely low rainfall, high evaporation.</li>
            <li>• Temperate Forest: Deciduous trees (shed leaves).</li>
          </ul>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic">BIOME</div>
        </div>
      </div>
    </div>
  `
};
