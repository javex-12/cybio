export const chap3Content: Record<string, string> = {
  "transport-intro": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. The Cell and its Environment</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          A cell is not an island. It lives in a fluid environment. To survive, it must move materials IN (Food, Oxygen) and OUT (Waste). This is the physics of life.
        </p>
      </section>

      <div class="p-10 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
        <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline">The Biophysical Laws</h4>
        <p class="text-sm text-slate-600 italic leading-relaxed mb-6 font-medium">
          Movement of materials is governed by three major processes. Two are <strong>Passive</strong> (Require NO energy) and one is <strong>Active</strong> (Requires ATP).
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-black uppercase tracking-widest text-center">
          <div class="p-4 bg-white rounded-2xl border border-blue-200 text-blue-600 shadow-sm">Diffusion (Passive)</div>
          <div class="p-4 bg-white rounded-2xl border border-blue-200 text-indigo-600 shadow-sm">Osmosis (Passive)</div>
          <div class="p-4 bg-white rounded-2xl border border-blue-200 text-rose-600 shadow-sm">Active Transport (Energy)</div>
        </div>
      </div>
    </div>
  `,

  "diffusion": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. Diffusion: The Kinetic Dance</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium">
          "The movement of molecules from a region of <strong>HIGHER</strong> concentration to a region of <strong>LOWER</strong> concentration."
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-indigo-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div class="relative z-10">
            <h4 class="text-emerald-400 font-black text-xl mb-4 tracking-tighter uppercase underline decoration-emerald-400">The Atomic Law</h4>
            <p class="text-sm text-indigo-100 leading-relaxed italic font-bold">
              Diffusion continues until <strong>EQUILIBRIUM</strong> is reached (molecules are evenly spread). It happens because molecules have <strong>Kinetic Energy</strong>—they are always vibrating and crashing into each other.
            </p>
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-[8rem] italic">GAS</div>
        </div>

        <div class="p-8 bg-white border-2 border-indigo-100 rounded-[2.5rem] shadow-lg">
          <h4 class="text-indigo-800 font-black text-lg mb-4 uppercase underline">Factors Affecting Diffusion</h4>
          <ul class="space-y-3 text-xs font-bold text-slate-600 italic tracking-tighter uppercase">
            <li class="flex items-center gap-3"><span class="w-2 h-2 bg-indigo-500 rounded-full"></span> <strong>Temperature:</strong> Hotter = Faster (More Kinetic Energy).</li>
            <li class="flex items-center gap-3"><span class="w-2 h-2 bg-indigo-500 rounded-full"></span> <strong>Size:</strong> Smaller molecules diffuse faster (Graham's Law).</li>
            <li class="flex items-center gap-3"><span class="w-2 h-2 bg-indigo-500 rounded-full"></span> <strong>State of Matter:</strong> Gas > Liquid > Solid.</li>
            <li class="flex items-center gap-3"><span class="w-2 h-2 bg-indigo-500 rounded-full"></span> <strong>Concentration Gradient:</strong> Steeper slope = Faster flow.</li>
          </ul>
        </div>
      </div>

      <div class="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500">
        <h5 class="text-indigo-900 font-black uppercase text-xs mb-2">Biological Significance (Why do we need it?)</h5>
        <p class="text-xs text-indigo-800 font-medium italic">
          1. Gaseous exchange in lungs (Oxygen in, CO2 out). <br/>
          2. Absorption of mineral salts in roots (Passive absorption). <br/>
          3. Movement of neurotransmitters across a synapse.
        </p>
      </div>
    </div>
  `,

  "osmosis": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-blue-500 pb-2 uppercase tracking-tighter italic">03. Osmosis: The Special Case</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-blue-200">
          Osmosis is just diffusion, but STRICTLY for water molecules through a <strong>Semi-Permeable Membrane</strong>.
        </p>
      </section>

      <div class="p-10 bg-white border-4 border-blue-100 rounded-[3rem] shadow-xl relative overflow-hidden">
        <h4 class="text-blue-600 font-black text-2xl mb-6 tracking-widest uppercase underline">The Definition (Memorize This)</h4>
        <p class="text-sm text-slate-600 leading-relaxed font-black italic uppercase tracking-wide">
          "The movement of water molecules from a region of WEAKER solution (High Water Potential) to a region of STRONGER solution (Low Water Potential) through a Selectively Permeable Membrane."
        </p>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div class="p-4 bg-blue-50 rounded-xl">
            <p class="text-[10px] font-black uppercase text-blue-400 mb-1">Hypotonic</p>
            <p class="text-xs font-bold text-blue-900">Weak Solution (More Water)</p>
          </div>
          <div class="p-4 bg-slate-50 rounded-xl">
            <p class="text-[10px] font-black uppercase text-slate-400 mb-1">Isotonic</p>
            <p class="text-xs font-bold text-slate-900">Equal Strength</p>
          </div>
          <div class="p-4 bg-blue-900 rounded-xl">
            <p class="text-[10px] font-black uppercase text-blue-400 mb-1">Hypertonic</p>
            <p class="text-xs font-bold text-white">Strong Solution (Less Water)</p>
          </div>
        </div>
      </div>

      <div class="bg-rose-50 p-8 rounded-[2rem] border border-rose-100 relative">
        <h4 class="text-rose-800 font-black uppercase text-xs mb-4 tracking-[0.2em]">Atomic Concept: Osmotic Pressure</h4>
        <p class="text-sm text-rose-900 font-medium leading-relaxed italic">
          The pressure required to STOP osmosis from happening. A stronger solution (Hypertonic) has a HIGHER osmotic pressure because it "pulls" water harder.
        </p>
      </div>
    </div>
  `,

  "plasmolysis": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic">04. Life & Death: Plasmolysis</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium">
          What happens when you put a cell in salt water? It loses water and dies. This is why you can't drink seawater.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Plant Cells -->
        <div class="p-8 bg-emerald-50 border-2 border-emerald-100 rounded-[2.5rem]">
          <h4 class="font-black text-emerald-800 text-lg uppercase mb-4 underline">In Plant Cells (Plasmolysis)</h4>
          <p class="text-xs text-slate-600 leading-relaxed font-bold italic mb-4">
            When placed in a <strong>Hypertonic</strong> solution, water leaves the vacuole. The cytoplasm shrinks and pulls away from the cell wall.
          </p>
          <ul class="space-y-2 text-[10px] font-black uppercase tracking-widest text-emerald-700">
            <li>• Turgid: Normal state (in water).</li>
            <li>• Flaccid: Limp (in isotonic).</li>
            <li>• Plasmolysed: Shrunken (in salt).</li>
          </ul>
        </div>

        <!-- Animal Cells -->
        <div class="p-8 bg-rose-50 border-2 border-rose-100 rounded-[2.5rem]">
          <h4 class="font-black text-rose-800 text-lg uppercase mb-4 underline">In Animal Cells (Haemolysis)</h4>
          <p class="text-xs text-slate-600 leading-relaxed font-bold italic mb-4">
            Animals have no cell wall. 
            <br/>In <strong>Hypotonic</strong> (pure water), they burst (<strong>Haemolysis</strong>).
            <br/>In <strong>Hypertonic</strong> (salt), they shrink/wrinkle (<strong>Crenation</strong>).
          </p>
        </div>
      </div>
    </div>
  `,

  "active-transport": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-amber-500 pb-2 uppercase tracking-tighter italic">05. Active Transport: Against the Flow</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-amber-200">
          Sometimes, a cell needs to grab something even if it already has plenty of it. This requires <strong>Energy (ATP)</strong>.
        </p>
      </section>

      <div class="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
        <div class="relative z-10">
          <h4 class="text-amber-400 font-black text-3xl mb-6 tracking-tighter uppercase underline decoration-amber-400">Atomic Definition</h4>
          <p class="text-sm text-slate-300 leading-relaxed italic mb-8 font-bold">
            "The movement of ions/molecules from a region of <strong>LOWER</strong> concentration to a region of <strong>HIGHER</strong> concentration (Against the Concentration Gradient) using Energy."
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h5 class="text-amber-300 uppercase font-black mb-2 text-xs">Example 1: Roots</h5>
              <p class="text-[10px]">Plant roots absorbing mineral salts from the soil, even when the soil has very few salts.</p>
            </div>
            <div class="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h5 class="text-amber-300 uppercase font-black mb-2 text-xs">Example 2: Nerves</h5>
              <p class="text-[10px]">The Sodium-Potassium pump in nerve cells (pumping Na+ out and K+ in).</p>
            </div>
          </div>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic">ATP</div>
      </div>
    </div>
  `
};
