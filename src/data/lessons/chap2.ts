export const chap2Content: Record<string, string> = {
  "cell-as-unit": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. The Cell as a Unit</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          The cell is the basic structural and functional unit of life. Just as a building is made of bricks, every organism is a collection of cells.
        </p>
      </section>

      <!-- UNICELLULAR VS MULTICELLULAR -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl hover:scale-[1.02] transition-transform">
          <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline">Unicellular Organisms</h4>
          <p class="text-sm text-slate-600 italic leading-relaxed mb-6 font-medium">
            One cell performs ALL life functions (Movement, Reproduction, etc.).
          </p>
          <div class="p-4 bg-white rounded-2xl border border-blue-200">
            <p class="text-xs font-black text-blue-600 uppercase tracking-widest italic underline mb-2">Atomic Example:</p>
            <p class="text-[10px] font-bold text-slate-500 italic"><em>Amoeba proteus</em> and <em>Chlamydomonas</em>. They are self-sufficient units.</p>
          </div>
        </div>
        <div class="p-8 bg-indigo-50 border-2 border-indigo-100 rounded-[3rem] shadow-xl hover:scale-[1.02] transition-transform">
          <h4 class="font-black text-indigo-900 text-lg uppercase mb-4 underline">Multicellular Organisms</h4>
          <p class="text-sm text-slate-600 italic leading-relaxed mb-6 font-medium">
            Cells specialize and work together. This leads to <strong>Division of Labour</strong>.
          </p>
          <div class="p-4 bg-white rounded-2xl border border-indigo-200">
            <p class="text-xs font-black text-indigo-600 uppercase tracking-widest italic underline mb-2">Atomic Logic:</p>
            <p class="text-[10px] font-bold text-slate-500 italic">Complexity allows for larger size and increased survival efficiency in diverse habitats.</p>
          </div>
        </div>
      </div>
    </div>
  `,

  "cell-colony": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. Living Cells as a Colony</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline underline-offset-8 decoration-indigo-200">
          Between single cells and complex tissues lies the <strong>Colony</strong>. In a colony, individual cells live together for protection, but they are still mostly independent.
        </p>
      </section>

      <div class="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
        <div class="relative z-10">
          <h4 class="text-emerald-400 font-black text-3xl mb-6 tracking-tighter uppercase underline decoration-emerald-400">Atomic Example: VOLVOX</h4>
          <p class="text-sm text-slate-300 leading-relaxed italic mb-8 font-bold underline decoration-slate-700">
            <em>Volvox</em> is a spherical colony of thousands of cells. Each cell has flagella to help the whole "ball" swim. 
            <br/><br/>
            <strong>Atomic Distinction:</strong> Unlike a tissue, if you separate a cell from a <em>Volvox</em> colony, it can often survive on its own.
          </p>
          <div class="inline-block px-4 py-2 bg-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/30">The Bridge to Multicellularity</div>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic">COLONY</div>
      </div>
    </div>
  `,

  "cell-tissue": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic underline">03. Cells as Part of Living Tissue</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-black">
          In high-level organisms, cells lose their independence to gain <strong>Efficiency</strong>. 
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <div class="p-6 bg-white border-l-8 border-rose-500 shadow-xl rounded-r-3xl">
            <h5 class="font-black text-slate-800 uppercase tracking-widest text-sm mb-2">Animal Tissues</h5>
            <p class="text-xs text-slate-500 leading-relaxed font-bold italic underline decoration-rose-100">
              • <strong>Epithelial:</strong> For protection (Skin). <br/>
              • <strong>Muscular:</strong> For movement. <br/>
              • <strong>Nervous:</strong> For signal transmission.
            </p>
          </div>
          <div class="p-6 bg-white border-l-8 border-emerald-500 shadow-xl rounded-r-3xl">
            <h5 class="font-black text-slate-800 uppercase tracking-widest text-sm mb-2">Plant Tissues</h5>
            <p class="text-xs text-slate-500 leading-relaxed font-bold italic underline decoration-emerald-100">
              • <strong>Epidermal:</strong> Outer "Skin" of the plant. <br/>
              • <strong>Vascular:</strong> Xylem (Water) and Phloem (Food). <br/>
              • <strong>Mesophyll:</strong> Photosynthetic cells in the leaf.
            </p>
          </div>
        </div>
        
        <div class="bg-rose-900 text-white p-10 rounded-[3.5rem] shadow-2xl flex items-center justify-center text-center italic font-black uppercase tracking-tighter">
          <p class="text-lg leading-relaxed underline underline-offset-8 decoration-rose-400">
            "A Tissue is a group of SIMILAR cells working together to perform a SPECIFIC function."
          </p>
        </div>
      </div>
    </div>
  `,

  "cell-theory": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-amber-600 pb-2 mb-6 tracking-tighter uppercase italic">04. The Cell Theory</h3>
        <p class="text-lg text-slate-600 leading-relaxed font-bold italic underline decoration-amber-200">
          The Cell Theory is the "Constitution" of Biology. It took nearly 200 years to finalize.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-6 bg-white border-2 border-slate-100 rounded-3xl shadow-sm italic text-center">
          <h5 class="font-black text-slate-400 text-[10px] uppercase mb-2">1665</h5>
          <p class="text-xs font-black text-slate-800">Robert Hooke discovers "Cells" in cork.</p>
        </div>
        <div class="p-6 bg-white border-2 border-slate-100 rounded-3xl shadow-sm italic text-center">
          <h5 class="font-black text-slate-400 text-[10px] uppercase mb-2">1838-1839</h5>
          <p class="text-xs font-black text-slate-800">Schleiden & Schwann conclude all plants/animals are made of cells.</p>
        </div>
        <div class="p-6 bg-white border-2 border-slate-100 rounded-3xl shadow-sm italic text-center">
          <h5 class="font-black text-slate-400 text-[10px] uppercase mb-2">1855</h5>
          <p class="text-xs font-black text-slate-800">Rudolf Virchow states: "All cells come from pre-existing cells."</p>
        </div>
      </div>

      <section class="bg-amber-900 text-white p-12 rounded-[4rem] shadow-2xl relative border-4 border-amber-500/20">
        <h4 class="text-amber-400 font-black text-2xl mb-8 uppercase italic tracking-widest underline underline-offset-8">The 3 Atomic Principles</h4>
        <div class="space-y-8 text-sm font-black italic tracking-widest uppercase leading-relaxed underline decoration-amber-700 underline-offset-4">
          <p>1. The Cell is the structural and functional unit of all living things.</p>
          <p>2. All organisms are made up of one or more cells.</p>
          <p>3. New cells are produced only from existing cells via cell division.</p>
        </div>
      </section>
    </div>
  `,

  "cell-structure": `
    <div class="space-y-16">
      <section>
        <h3 class="text-4xl font-black text-slate-900 border-b-8 border-blue-900 pb-2 mb-6 uppercase italic tracking-tighter">05. Cell Structure & Organelles</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-black italic underline underline-offset-8 decoration-blue-200 uppercase">Prokaryotic vs Eukaryotic: The Molecular Divide.</p>
      </section>

      <!-- COMPARISON -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-10 bg-slate-100 rounded-[3rem] border-2 border-slate-200">
          <h4 class="font-black text-slate-800 text-xl uppercase mb-4 underline italic">Prokaryotic Cells</h4>
          <p class="text-xs text-slate-500 font-black italic uppercase tracking-widest mb-4 underline decoration-slate-300">Primitive (Ex: Bacteria)</p>
          <ul class="space-y-2 text-xs font-bold italic tracking-tighter text-slate-600">
            <li>• NO nuclear membrane (Nucleoid region).</li>
            <li>• NO membrane-bound organelles (Mitochondria, etc).</li>
            <li>• 70S Ribosomes.</li>
            <li>• Circular DNA.</li>
          </ul>
        </div>
        <div class="p-10 bg-blue-900 text-white rounded-[3rem] shadow-2xl">
          <h4 class="font-black text-blue-400 text-xl uppercase mb-4 underline italic">Eukaryotic Cells</h4>
          <p class="text-xs text-blue-300 font-black italic uppercase tracking-widest mb-4 underline decoration-blue-700">Advanced (Ex: You, Plants, Fungi)</p>
          <ul class="space-y-2 text-xs font-bold italic tracking-tighter text-blue-100">
            <li>• TRUE Nucleus with a membrane.</li>
            <li>• COMPLEX organelles (Mitochondria, ER, Golgi).</li>
            <li>• 80S Ribosomes.</li>
            <li>• Linear DNA (Chromosomes).</li>
          </ul>
        </div>
      </div>

      <!-- ORGANELLE MASTERY -->
      <section class="space-y-10">
        <h4 class="text-3xl font-black text-slate-800 border-b-4 border-slate-100 pb-2 uppercase tracking-widest italic text-center">Organelle Master-Class</h4>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-xl hover:border-blue-500 transition-all group">
            <h5 class="font-black text-blue-600 text-lg mb-2 uppercase underline decoration-blue-100">1. THE NUCLEUS (The Command Center)</h5>
            <p class="text-xs text-slate-600 font-medium italic leading-relaxed">Contains <strong>Chromatin</strong> (DNA + Protein). It controls all cellular activities including division and protein synthesis.</p>
          </div>

          <div class="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-xl hover:border-indigo-500 transition-all group">
            <h5 class="font-black text-indigo-600 text-lg mb-2 uppercase underline decoration-indigo-100">2. MITOCHONDRIA (The Powerhouse)</h5>
            <p class="text-xs text-slate-600 font-medium italic leading-relaxed">Site of <strong>Aerobic Respiration</strong>. It has its own DNA and a folded inner membrane called <strong>Cristae</strong> to increase surface area for ATP production.</p>
          </div>

          <div class="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-xl hover:border-emerald-500 transition-all group">
            <h5 class="font-black text-emerald-600 text-lg mb-2 uppercase underline decoration-emerald-100">3. CHLOROPLASTS (Solar Panels)</h5>
            <p class="text-xs text-slate-600 font-medium italic leading-relaxed">Found in plants. Contains <strong>Chlorophyll</strong>. Site of Photosynthesis. Has internal stacks called <strong>Grana</strong>.</p>
          </div>

          <div class="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-xl hover:border-purple-500 transition-all group">
            <h5 class="font-black text-purple-600 text-lg mb-2 uppercase underline decoration-purple-100">4. RIBOSOMES (Protein Factories)</h5>
            <p class="text-xs text-slate-600 font-medium italic leading-relaxed">Tiny, non-membrane bound particles where proteins are synthesized based on genetic code from the nucleus.</p>
          </div>
        </div>
      </section>

      <!-- ATOMIC SUMMARY -->
      <section class="bg-blue-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden border-8 border-blue-500/20">
        <h4 class="text-emerald-400 font-black uppercase text-xs mb-6 tracking-[0.5em] text-center italic">ATOMIC EXAM EDGE</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm font-black italic tracking-widest uppercase leading-relaxed underline underline-offset-8 decoration-blue-700">
          <p>• Plant cells have a <strong>CELL WALL</strong> and <strong>CHLOROPLASTS</strong>; Animal cells do not.</p>
          <p>• Animal cells have <strong>CENTRIOLES</strong> for division; most plant cells do not.</p>
          <p>• The <strong>VACUOLE</strong> in plants is large and central; in animals it is small and temporary.</p>
          <p>• Protoplasm = Cytoplasm + Nucleoplasm.</p>
        </div>
      </section>
    </div>
  `
};
