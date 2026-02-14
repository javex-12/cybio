export const chap6Content: Record<string, string> = {
  "nutrition-intro": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Introduction to Animal Nutrition</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          Nutrition is the process by which living organisms obtain and utilize food for growth, repair, and maintenance of life.
        </p>
      </section>

      <div class="p-10 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
        <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline">The Purpose of Food</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-medium text-slate-700 italic">
          <p class="p-4 bg-white rounded-2xl border border-blue-200 shadow-sm">1. Energy production via Respiration.</p>
          <p class="p-4 bg-white rounded-2xl border border-blue-200 shadow-sm">2. Synthesis of new cells and tissues.</p>
          <p class="p-4 bg-white rounded-2xl border border-blue-200 shadow-sm">3. Protection against diseases.</p>
          <p class="p-4 bg-white rounded-2xl border border-blue-200 shadow-sm">4. Repair of worn-out tissues.</p>
        </div>
      </div>
    </div>
  `,

  "food-classes": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. The Six Classes of Food</h3>
      </section>

      <div class="space-y-8">
        <!-- Carbohydrates -->
        <div class="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-lg hover:border-indigo-400 transition-all">
          <h4 class="font-black text-indigo-600 text-xl mb-4 underline uppercase tracking-widest italic">1. Carbohydrates</h4>
          <p class="text-sm text-slate-600 leading-relaxed italic font-bold mb-4">
            Energy-giving foods. Composed of Carbon, Hydrogen, and Oxygen.
          </p>
          <div class="p-4 bg-indigo-50 rounded-xl text-xs italic font-medium text-indigo-800">
            <strong>Atomic Depth:</strong> Monosaccharides (Glucose, Fructose), Disaccharides (Sucrose, Maltose), Polysaccharides (Starch, Cellulose, Glycogen).
          </div>
        </div>

        <!-- Proteins -->
        <div class="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div class="relative z-10">
            <h4 class="text-emerald-400 font-black text-xl mb-4 underline uppercase italic">2. Proteins</h4>
            <p class="text-sm text-slate-300 leading-relaxed italic font-bold mb-6">
              Body-building foods. Essential for growth and repair.
            </p>
            <div class="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs italic underline decoration-slate-700">
              Composed of amino acids linked by <strong>Peptide Bonds</strong>. Contain Nitrogen in addition to C, H, and O.
            </div>
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">PROTEIN</div>
        </div>

        <!-- Fats & Oils -->
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[2.5rem] shadow-lg">
          <h4 class="font-black text-blue-900 text-xl mb-4 underline uppercase tracking-tighter italic">3. Fats and Oils (Lipids)</h4>
          <p class="text-sm text-slate-600 leading-relaxed italic font-bold underline decoration-blue-200">
            High-energy storage. Provide insulation and protect organs.
          </p>
          <p class="text-[10px] text-slate-500 mt-4 italic font-black uppercase tracking-widest">Structural Unit: 1 Glycerol + 3 Fatty Acids.</p>
        </div>
      </div>
    </div>
  `,

  "balanced-diet": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic">03. Balanced Diet & Malnutrition</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-black uppercase underline decoration-rose-200">
          A diet containing all six classes of food in the correct proportions.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-rose-50 border-2 border-rose-100 rounded-[3rem]">
          <h4 class="font-black text-rose-800 text-lg uppercase mb-4 underline">Deficiency Diseases</h4>
          <ul class="space-y-3 text-xs font-bold italic tracking-tighter uppercase text-rose-700 underline decoration-rose-200 underline-offset-4">
            <li>• Protein: <strong>Kwashiorkor</strong> (Swollen stomach).</li>
            <li>• Carbohydrates/Total: <strong>Marasmus</strong> (Wasting).</li>
            <li>• Vitamin C: <strong>Scurvy</strong> (Bleeding gums).</li>
            <li>• Vitamin D/Calcium: <strong>Rickets</strong> (Soft bones).</li>
            <li>• Iodine: <strong>Goitre</strong> (Swollen neck).</li>
          </ul>
        </div>
        <div class="p-8 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col justify-center">
          <h4 class="text-emerald-400 font-black text-xl mb-4 italic uppercase underline tracking-widest">Atomic Exam Focus</h4>
          <p class="text-xs italic font-bold leading-relaxed mb-4 underline decoration-slate-700 underline-offset-8">
            Vitamins are organic catalysts needed in small amounts. Minerals (Calcium, Iron, etc.) are inorganic.
          </p>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">HEALTH</div>
        </div>
      </div>
    </div>
  `,

  "nutrition-modes": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic underline">04. Modes of Nutrition</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-10 bg-emerald-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden">
          <h4 class="text-emerald-400 font-black text-2xl mb-4 italic uppercase underline tracking-widest">Autotrophic</h4>
          <p class="text-sm text-emerald-100 leading-relaxed italic font-bold underline decoration-emerald-700 mb-6">Organisms synthesize their own food.</p>
          <div class="space-y-2 text-xs">
            <p>• <strong>Photosynthesis:</strong> Uses Light (Plants).</p>
            <p>• <strong>Chemosynthesis:</strong> Uses Chemical energy (Some Bacteria).</p>
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">SELF</div>
        </div>
        <div class="p-10 bg-blue-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden">
          <h4 class="text-blue-400 font-black text-2xl mb-4 italic uppercase underline tracking-widest">Heterotrophic</h4>
          <p class="text-sm text-blue-100 leading-relaxed italic font-bold underline decoration-blue-700 mb-6">Depends on others for food.</p>
          <div class="space-y-2 text-xs">
            <p>• <strong>Holozoic:</strong> Ingestion of solids (Man).</p>
            <p>• <strong>Parasitic:</strong> Lives on/in host (Tapeworm).</p>
            <p>• <strong>Saprophytic:</strong> Dead organic matter (Fungi).</p>
            <p>• <strong>Symbiotic:</strong> Mutual benefit (Lichens).</p>
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">OTHER</div>
        </div>
      </div>
    </div>
  `,

  "feeding-mechanisms": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-blue-500 pb-2 uppercase tracking-tighter italic">05. Feeding Mechanisms</h3>
      </section>

      <div class="grid grid-cols-1 gap-6">
        <div class="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
          <h4 class="font-black text-blue-600 uppercase text-xs mb-4 tracking-[0.2em] underline">Filter Feeders</h4>
          <p class="text-sm text-slate-600 italic font-bold underline decoration-blue-100 mb-2">Aquatic organisms that strain food from water.</p>
          <p class="text-xs text-slate-500 italic">Example: Mosquito larvae, Whale, Sponges.</p>
        </div>
        <div class="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
          <h4 class="font-black text-blue-600 uppercase text-xs mb-4 tracking-[0.2em] underline">Fluid Feeders</h4>
          <p class="text-sm text-slate-600 italic font-bold underline decoration-blue-100 mb-2">Feed on liquids like nectar or blood.</p>
          <p class="text-xs text-slate-500 italic">Example: Mosquitoes (Piercing/Sucking), Bees (Sucking).</p>
        </div>
        <div class="p-8 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
          <h4 class="text-emerald-400 font-black text-xl mb-4 italic uppercase underline">Absorption (Parasites)</h4>
          <p class="text-sm text-slate-300 leading-relaxed italic mb-4 font-bold underline decoration-slate-700">
            Absorb pre-digested food through their body surface.
          </p>
          <p class="text-xs text-emerald-300 font-black italic uppercase tracking-widest underline underline-offset-4 decoration-emerald-900">Atomic Example: Tapeworm (Has no digestive system!).</p>
        </div>
      </div>
    </div>
  `,

  "mammalian-teeth": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic underline underline-offset-8">06. Mammalian Teeth & Dentition</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-black uppercase tracking-tighter underline decoration-rose-200">
          Mammals have <strong>Heterodont Dentition</strong> (different shapes for different jobs).
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-10 bg-white border-4 border-slate-100 rounded-[3.5rem] shadow-2xl">
          <h4 class="text-rose-600 font-black text-xl italic uppercase underline mb-6 tracking-widest">Types of Teeth</h4>
          <ul class="space-y-4 text-sm font-bold italic tracking-tighter text-slate-600 uppercase underline decoration-rose-50 underline-offset-4">
            <li>1. Incisors: For cutting/biting.</li>
            <li>2. Canines: For tearing flesh (long/pointed).</li>
            <li>3. Premolars: For grinding/crushing.</li>
            <li>4. Molars: For grinding (large surface).</li>
          </ul>
        </div>
        <div class="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden border-4 border-blue-500/20">
          <h4 class="text-emerald-400 font-black text-2xl mb-6 italic tracking-tighter underline uppercase">Atomic Dental Formula</h4>
          <p class="text-xs text-slate-300 italic mb-6 font-bold leading-relaxed underline underline-offset-8 decoration-slate-700">
            A numerical representation of teeth in one-half of the jaw.
          </p>
          <div class="p-6 bg-white/5 rounded-2xl border border-white/10 text-center font-black italic tracking-widest text-lg mb-4 text-emerald-300">
            Human Adult: i 2/2, c 1/1, pm 2/2, m 3/3 = 32 Total
          </div>
          <div class="p-4 bg-emerald-500/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-emerald-400 italic">
            JAMB Focus: Herbivores like Rabbits lack canines, leaving a gap called the <strong>DIASTEMA</strong>.
          </div>
        </div>
      </div>
    </div>
  `,

  "enzymes": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">07. Enzymes: Biological Catalysts</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-indigo-200">
          Enzymes speed up chemical reactions without being consumed.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-10 bg-indigo-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
          <div class="relative z-10">
            <h4 class="text-emerald-400 font-black text-xl mb-4 italic uppercase underline">Atomic Properties</h4>
            <ul class="text-xs space-y-3 font-bold italic tracking-tighter text-indigo-100 uppercase underline decoration-indigo-700 underline-offset-4">
              <li>• They are Protein in nature.</li>
              <li>• Specific in action (Lock & Key mechanism).</li>
              <li>• Sensitive to pH and Temperature (Denature at high temp).</li>
              <li>• Reversible in action.</li>
            </ul>
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">CATALYST</div>
        </div>
        <div class="p-10 bg-white border-2 border-indigo-100 rounded-[3.5rem] shadow-xl">
          <h4 class="text-indigo-900 font-black text-xl mb-4 italic uppercase underline">Atomic Classification</h4>
          <ul class="text-xs space-y-3 font-bold italic tracking-tighter text-slate-600 uppercase underline decoration-indigo-50 underline-offset-4">
            <li>• Proteases: Digest Proteins.</li>
            <li>• Amylases: Digest Carbohydrates (Starch).</li>
            <li>• Lipases: Digest Fats (Lipids).</li>
          </ul>
        </div>
      </div>
    </div>
  `
};
