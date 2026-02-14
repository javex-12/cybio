export const chap4Content: Record<string, string> = {
  "cell-feeding": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-emerald-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Cellular Feeding & Metabolism</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-emerald-200 underline-offset-8 uppercase">
          Feeding is the ingestion of energy. At the cellular level, this is known as <strong>Metabolism</strong>.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-emerald-50 border-2 border-emerald-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-emerald-900 text-lg uppercase mb-4 underline italic">Phagocytosis (Cell Eating)</h4>
          <p class="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
            Large particles are engulfed by the cell membrane forming a <strong>Food Vacuole</strong>. 
            <br/><br/>
            <strong>Atomic Example:</strong> <em>Amoeba</em> using pseudopodia to trap bacteria. In your body, White Blood Cells (Leukocytes) do this to destroy germs.
          </p>
        </div>
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">Pinocytosis (Cell Drinking)</h4>
          <p class="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
            The cell takes in liquid droplets from its environment via tiny vesicles.
          </p>
          <div class="p-4 bg-white rounded-2xl border border-blue-200 text-[10px] font-black uppercase italic tracking-tighter text-blue-600">
            Mechanism: The membrane invaginates (folds inward) to create a fluid-filled sac.
          </div>
        </div>
      </div>
    </div>
  `,

  "cell-respiration": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. Cellular Respiration: The ATP Factory</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium">
          Energy is not created; it is released from chemical bonds.
        </p>
      </section>

      <div class="bg-indigo-900 text-white p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
        <div class="relative z-10">
          <h4 class="text-emerald-400 font-black text-2xl mb-6 tracking-tighter uppercase underline decoration-emerald-400 italic">Aerobic Respiration</h4>
          <p class="text-sm text-indigo-100 leading-relaxed italic mb-8 font-bold">
            Occurs in the presence of Oxygen. It is the most efficient way to get energy.
          </p>
          <div class="p-6 bg-white/5 rounded-2xl border border-white/10 text-center font-black italic tracking-widest text-lg mb-6">
            C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + 38 ATP
          </div>
          <p class="text-xs text-indigo-300 italic underline">Note: 38 ATP is the total energy yield per glucose molecule.</p>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic">ENERGY</div>
      </div>

      <div class="p-8 bg-slate-50 border-2 border-slate-200 rounded-[3rem]">
        <h4 class="font-black text-slate-800 text-lg uppercase mb-4 underline">Anaerobic Respiration (Fermentation)</h4>
        <p class="text-sm text-slate-600 leading-relaxed italic font-bold mb-4">
          Occurs without Oxygen. Less efficient (Only 2 ATP).
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-white rounded-xl border border-slate-200">
            <span class="text-xs font-black text-rose-600 uppercase italic">In Animals:</span>
            <p class="text-[10px] font-bold">Produces <strong>Lactic Acid</strong>. This causes muscle fatigue during heavy exercise.</p>
          </div>
          <div class="p-4 bg-white rounded-xl border border-slate-200">
            <span class="text-xs font-black text-amber-600 uppercase italic">In Yeast/Plants:</span>
            <p class="text-[10px] font-bold">Produces <strong>Ethanol</strong> and CO2. Used in baking and brewing.</p>
          </div>
        </div>
      </div>
    </div>
  `,

  "cell-excretion": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-orange-600 pb-2 uppercase tracking-tighter italic">03. Excretion & Osmoregulation</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-orange-200 underline-offset-8">
          The cell must remove metabolic "exhaust" to prevent poisoning.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-orange-50 border-2 border-orange-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-orange-900 text-lg uppercase mb-4 underline italic">Contractile Vacuole</h4>
          <p class="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
            Found in freshwater unicellular organisms like <em>Amoeba</em> and <em>Paramecium</em>. 
            <br/><br/>
            <strong>Atomic Purpose:</strong> They act as "pumps" to remove excess water that constantly enters the cell via osmosis. This is <strong>Osmoregulation</strong>.
          </p>
        </div>
        <div class="p-8 bg-slate-900 text-white rounded-[3rem] shadow-xl relative overflow-hidden">
          <h4 class="text-amber-400 font-black text-lg uppercase mb-4 underline italic">Metabolic Wastes</h4>
          <ul class="space-y-3 text-xs font-bold italic tracking-tighter uppercase underline decoration-slate-700 underline-offset-4">
            <li>• CO2 (From Respiration)</li>
            <li>• Urea/Ammonia (From Protein breakdown)</li>
            <li>• Oxygen (Waste in plants during the day!)</li>
          </ul>
          <div class="absolute -right-4 -bottom-4 opacity-10 text-white italic font-black text-6xl">WASTE</div>
        </div>
      </div>
    </div>
  `,

  "cell-growth-mitosis": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">04. Cell Growth & Mitosis</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8 uppercase">
          Growth is achieved through cell division. <strong>Mitosis</strong> is the division of somatic (body) cells.
        </p>
      </section>

      <div class="relative pl-12 border-l-4 border-blue-100 space-y-10">
        <div class="relative">
          <div class="absolute -left-[54px] top-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black">P</div>
          <h5 class="text-lg font-black text-slate-800 uppercase italic">Prophase</h5>
          <p class="text-sm text-slate-500 italic font-medium">Chromosomes become visible. Nuclear membrane starts to disappear.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-[54px] top-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black">M</div>
          <h5 class="text-lg font-black text-slate-800 uppercase italic">Metaphase (The Equator)</h5>
          <p class="text-sm text-slate-500 italic font-medium">Chromosomes line up in the middle of the cell. Spindle fibers attach to centromeres.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-[54px] top-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black">A</div>
          <h5 class="text-lg font-black text-slate-800 uppercase italic">Anaphase (The Split)</h5>
          <p class="text-sm text-slate-500 italic font-medium underline decoration-blue-100">Chromatids are pulled apart to opposite poles.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-[54px] top-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black">T</div>
          <h5 class="text-lg font-black text-slate-800 uppercase italic">Telophase</h5>
          <p class="text-sm text-slate-500 italic font-medium">Two new nuclei form. Followed by <strong>Cytokinesis</strong> (actual cell split).</p>
        </div>
      </div>

      <div class="bg-blue-900 text-white p-10 rounded-[3.5rem] shadow-2xl">
        <h4 class="text-emerald-400 font-black text-sm uppercase tracking-widest mb-4">Atomic Significance:</h4>
        <p class="text-sm italic font-bold underline decoration-blue-700 underline-offset-8 leading-relaxed">
          Mitosis ensures that daughter cells are GENETICALLY IDENTICAL to the parent cell. It is for growth, repair, and asexual reproduction.
        </p>
      </div>
    </div>
  `,

  "cell-meiosis": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-purple-600 pb-2 uppercase tracking-tighter italic underline">05. Meiosis: Reduction Division</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-black uppercase tracking-tighter underline underline-offset-8">
          The division of germ cells (Gametes). It reduces the chromosome number by HALF.
        </p>
      </section>

      <div class="p-10 bg-purple-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden">
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-sm font-black italic tracking-tighter uppercase leading-relaxed underline decoration-purple-700 underline-offset-8">
          <div class="space-y-4">
            <p>• Diploid (2n) → Haploid (n).</p>
            <p>• Occurs in Gonads (Testes/Ovaries or Anthers/Ovules).</p>
          </div>
          <div class="space-y-4">
            <p>• <strong>Crossing Over:</strong> Exchange of genetic material in Prophase I. This causes <strong>Variation</strong>.</p>
            <p>• Results in 4 NON-IDENTICAL daughter cells.</p>
          </div>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic">MEIOSIS</div>
      </div>
    </div>
  `,

  "cell-reproduction": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic">06. Forms of Reproduction</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-white border-2 border-slate-100 rounded-[3rem] shadow-lg hover:border-rose-400 transition-all">
          <h4 class="font-black text-rose-600 text-lg uppercase mb-4 underline">Asexual Reproduction</h4>
          <p class="text-[10px] text-slate-500 font-bold uppercase mb-4 italic tracking-tighter underline underline-offset-4">No gametes involved. Single parent.</p>
          <ul class="text-xs space-y-2 font-bold italic tracking-tighter uppercase text-slate-600">
            <li>• <strong>Binary Fission:</strong> Bacteria, Amoeba.</li>
            <li>• <strong>Budding:</strong> Yeast, Hydra.</li>
            <li>• <strong>Vegetative Propagation:</strong> Plant cuttings, bulbs.</li>
            <li>• <strong>Spore Formation:</strong> Fungi, Ferns.</li>
          </ul>
        </div>
        <div class="p-8 bg-rose-900 text-white rounded-[3rem] shadow-2xl">
          <h4 class="font-black text-emerald-400 text-lg uppercase mb-4 underline">Sexual Reproduction</h4>
          <p class="text-[10px] text-rose-200 font-bold uppercase mb-4 italic tracking-tighter underline underline-offset-4 decoration-rose-700">Involves Gametes (Sperm/Egg). Fusion = Zygote.</p>
          <p class="text-xs leading-relaxed italic font-bold underline decoration-rose-800 underline-offset-8">
            This leads to <strong>Variation</strong> within a species, which is the engine of <strong>Evolution</strong>.
          </p>
        </div>
      </div>
    </div>
  `,

  "cell-reactions": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-blue-500 pb-2 uppercase tracking-tighter italic">07. Cell Reactions & Movement</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-10 bg-blue-50 border-2 border-blue-100 rounded-[3.5rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-xl mb-4 italic uppercase underline">Cellular Movement</h4>
          <div class="space-y-4 text-sm font-bold italic tracking-tighter text-slate-600 uppercase underline decoration-blue-200 underline-offset-4">
            <p>1. Ciliary (Cilia): <em>Paramecium</em>.</p>
            <p>2. Flagellar (Flagella): <em>Euglena</em>, Spermatozoa.</p>
            <p>3. Amoeboid (Pseudopodia): <em>Amoeba</em>, WBCs.</p>
          </div>
        </div>
        <div class="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden">
          <h4 class="text-emerald-400 font-black text-xl mb-4 italic uppercase underline">Cell Reactions</h4>
          <p class="text-xs leading-relaxed font-bold italic mb-6 underline decoration-slate-700 underline-offset-8">
            Cells respond to chemical (Chemotaxis), light (Phototaxis), and physical stimuli.
          </p>
          <div class="p-4 bg-white/5 rounded-2xl border border-white/10 italic text-[10px] font-black uppercase tracking-widest text-emerald-300">
            Irritability is the core mechanism of survival.
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">REACT</div>
        </div>
      </div>
    </div>
  `
};
