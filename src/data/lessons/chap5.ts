export const chap5Content: Record<string, string> = {
  "skeleton-intro": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Introduction to Skeleton</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          The skeleton is the framework of the body. Without it, complex life would be a shapeless mass of protoplasm.
        </p>
      </section>

      <div class="p-10 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
        <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline">Biological Significance</h4>
        <p class="text-sm text-slate-600 italic leading-relaxed mb-6 font-medium">
          Support systems are essential for:
        </p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-black uppercase tracking-widest text-blue-700 italic">
          <li class="p-4 bg-white rounded-xl border border-blue-200">Maintaining Body Shape</li>
          <li class="p-4 bg-white rounded-xl border border-blue-200">Protecting Vital Organs</li>
          <li class="p-4 bg-white rounded-xl border border-blue-200">Enabling Complex Movement</li>
          <li class="p-4 bg-white rounded-xl border border-blue-200">Attaining Body Size</li>
        </ul>
      </div>
    </div>
  `,

  "skeleton-types": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. The Three Types of Skeleton</h3>
      </section>

      <div class="space-y-8">
        <!-- Hydrostatic -->
        <div class="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-lg hover:border-indigo-400 transition-all">
          <h4 class="font-black text-indigo-600 text-xl mb-4 underline italic uppercase">1. Hydrostatic Skeleton</h4>
          <p class="text-sm text-slate-600 leading-relaxed italic font-bold">
            Support is provided by a fluid-filled body cavity (Coelom) under pressure. 
            <br/><br/>
            <strong>Atomic Example:</strong> Earthworms, Jellyfish, and Sea Anemones. The fluid acts as a "water-bone."
          </p>
        </div>

        <!-- Exoskeleton -->
        <div class="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div class="relative z-10">
            <h4 class="text-emerald-400 font-black text-xl mb-4 underline italic uppercase">2. Exoskeleton</h4>
            <p class="text-sm text-slate-300 leading-relaxed italic font-bold mb-6">
              A hard outer covering that protects and supports the body.
            </p>
            <div class="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs italic underline decoration-slate-700">
              Made of <strong>CHITIN</strong> in Arthropods (Insects, Crabs) or Calcium Carbonate in Molluscs. 
              <br/><span class="text-emerald-400 font-black">JAMB Trap:</span> It must be shed periodically through <strong>Moulting (Ecdysis)</strong> to allow growth.
            </div>
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">CHITIN</div>
        </div>

        <!-- Endoskeleton -->
        <div class="p-8 bg-indigo-50 border-2 border-indigo-100 rounded-[2.5rem] shadow-lg">
          <h4 class="font-black text-indigo-900 text-xl mb-4 underline italic uppercase tracking-tighter">3. Endoskeleton</h4>
          <p class="text-sm text-slate-600 leading-relaxed italic font-bold underline decoration-indigo-200">
            A rigid internal framework found inside the body.
          </p>
          <p class="text-xs text-slate-500 mt-4 italic font-medium">
            Found in vertebrates (Fishes, Mammals). Made of <strong>Bone</strong> and <strong>Cartilage</strong>.
          </p>
        </div>
      </div>
    </div>
  `,

  "vertebral-column": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic">03. The Vertebral Column: The Central Axis</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-black uppercase underline decoration-rose-200">
          The human spine consists of 33 vertebrae, grouped into 5 regions.
        </p>
      </section>

      <div class="overflow-x-auto rounded-[2.5rem] border-4 border-slate-100 shadow-xl">
        <table class="w-full text-sm">
          <thead class="bg-rose-900 text-white uppercase text-[10px] tracking-widest">
            <tr>
              <th class="p-6 text-left">Region</th>
              <th class="p-6 text-left">Number</th>
              <th class="p-6 text-left">Atomic Feature</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 bg-white font-medium text-slate-600 italic">
            <tr>
              <td class="p-6 font-black text-rose-900 uppercase">Cervical (Neck)</td>
              <td class="p-6">7</td>
              <td class="p-6">Atlas (No. 1) & Axis (No. 2) for head movement.</td>
            </tr>
            <tr class="bg-slate-50">
              <td class="p-6 font-black text-rose-900 uppercase">Thoracic (Chest)</td>
              <td class="p-6">12</td>
              <td class="p-6 underline decoration-rose-200">Long neural spines for rib attachment.</td>
            </tr>
            <tr>
              <td class="p-6 font-black text-rose-900 uppercase">Lumbar (Back)</td>
              <td class="p-6">5</td>
              <td class="p-6 font-black uppercase tracking-tighter">Large centrals for weight bearing.</td>
            </tr>
            <tr class="bg-slate-50">
              <td class="p-6 font-black text-rose-900 uppercase">Sacral (Hip)</td>
              <td class="p-6">5 (Fused)</td>
              <td class="p-6 italic underline">Fused to form the Sacrum.</td>
            </tr>
            <tr>
              <td class="p-6 font-black text-rose-900 uppercase italic">Caudal (Tail)</td>
              <td class="p-6">4 (Fused)</td>
              <td class="p-6 italic underline decoration-slate-200">Forms the Coccyx.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,

  "joints": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-blue-500 pb-2 uppercase tracking-tighter italic">04. Joints & Movement</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium">
          A joint is where two or more bones meet.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-10 bg-blue-50 border-2 border-blue-100 rounded-[3.5rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-xl mb-4 italic uppercase underline">Synovial Joints</h4>
          <p class="text-xs text-slate-600 leading-relaxed italic font-bold mb-6 underline decoration-blue-200 underline-offset-8">
            Freely movable joints containing <strong>Synovial Fluid</strong> for lubrication.
          </p>
          <div class="space-y-4 text-sm font-bold italic tracking-tighter text-slate-600 uppercase underline decoration-blue-100 underline-offset-4">
            <p>1. Ball & Socket: Shoulder, Hip (360°).</p>
            <p>2. Hinge: Elbow, Knee (180°).</p>
            <p>3. Pivot: Atlas/Axis (Rotation).</p>
            <p>4. Gliding: Wrist, Ankle.</p>
          </div>
        </div>
        <div class="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center">
          <h4 class="text-emerald-400 font-black text-xl mb-4 italic uppercase underline">Ligaments vs Tendons</h4>
          <p class="text-sm italic font-black uppercase tracking-tighter underline decoration-slate-700 underline-offset-8 leading-relaxed mb-4">
            • <strong>Ligament:</strong> Bone to Bone. <br/>
            • <strong>Tendon:</strong> Muscle to Bone.
          </p>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">MOTION</div>
        </div>
      </div>
    </div>
  `,

  "plant-support": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-emerald-600 pb-2 uppercase tracking-tighter italic underline underline-offset-8">05. Supporting Tissues in Plants</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 font-black italic underline tracking-tighter decoration-emerald-200">
          Plants stay upright using specialized tissues and internal pressure.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-emerald-50 border-2 border-emerald-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-emerald-900 text-lg uppercase mb-4 underline italic">Parenchyma</h4>
          <p class="text-sm text-slate-600 leading-relaxed mb-6 font-medium italic underline decoration-emerald-200">
            Provides support through <strong>Turgidity</strong>. When cells are full of water, they become stiff.
          </p>
        </div>
        <div class="p-8 bg-white border-2 border-slate-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-slate-800 text-lg uppercase mb-4 underline italic">Collenchyma</h4>
          <p class="text-sm text-slate-600 leading-relaxed mb-6 font-medium italic underline decoration-slate-200">
            Support in young, growing stems. Cell walls are thickened with cellulose at the corners.
          </p>
        </div>
        <div class="p-8 bg-slate-900 text-white rounded-[3rem] shadow-2xl">
          <h4 class="text-emerald-400 font-black text-lg uppercase mb-4 underline italic tracking-tighter">Sclerenchyma & Xylem</h4>
          <p class="text-sm text-slate-300 leading-relaxed mb-6 font-medium italic underline decoration-slate-700">
            The strongest tissues. Walls are thickened with <strong>LIGNIN</strong>. Found in wood and hard seeds.
          </p>
        </div>
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">Mechanism: Turgor Pressure</h4>
          <p class="text-xs text-slate-600 leading-relaxed font-bold italic underline tracking-tighter decoration-blue-200">
            The outward pressure of the cell sap against the cell wall. This makes the plant firm.
          </p>
        </div>
      </div>
    </div>
  `,

  "skeleton-functions": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-blue-900 pb-2 uppercase tracking-tighter italic">06. Functions of the Skeleton</h3>
      </section>

      <div class="bg-blue-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-sm font-black italic tracking-widest text-sm uppercase underline decoration-blue-700 underline-offset-8">
          <div class="space-y-6">
            <p>1. Support: Provides framework for the body.</p>
            <p>2. Protection: Cranium protects brain; Ribcage protects heart.</p>
            <p>3. Movement: Provides attachment points for muscles.</p>
          </div>
          <div class="space-y-6">
            <p>4. Hemopoiesis: Red marrow in bones produces Blood Cells.</p>
            <p>5. Mineral Storage: Bones store Calcium and Phosphorus.</p>
            <p>6. Respiration: Ribs facilitate breathing movements.</p>
          </div>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic tracking-tighter">BONE</div>
      </div>
    </div>
  `
};
