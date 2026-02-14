export const chap17Content: Record<string, string> = {
  "blood-composition": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Composition of Blood</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          Blood is a fluid tissue composed of cells suspended in plasma.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">Plasma (55%)</h4>
          <p class="text-sm text-slate-600 leading-relaxed mb-6 font-medium italic underline decoration-blue-200">
            A pale yellow liquid containing water, proteins, nutrients, hormones, and waste.
          </p>
        </div>
        <div class="p-8 bg-indigo-50 border-2 border-indigo-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-indigo-900 text-lg uppercase mb-4 underline italic">Blood Cells (45%)</h4>
          <ul class="space-y-3 text-xs font-bold italic tracking-tighter uppercase text-indigo-700 underline decoration-indigo-200 underline-offset-4">
            <li>• <strong>Erythrocytes (RBCs):</strong> Carry Oxygen via Hemoglobin. No Nucleus.</li>
            <li>• <strong>Leukocytes (WBCs):</strong> Fight infection (Phagocytes & Lymphocytes).</li>
            <li>• <strong>Thrombocytes (Platelets):</strong> Essential for blood clotting.</li>
          </ul>
        </div>
      </div>
    </div>
  `,

  "heart-vessels": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic">02. The Heart & Blood Vessels</h3>
      </section>

      <div class="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
        <div class="relative z-10">
          <h4 class="text-emerald-400 font-black text-3xl mb-6 tracking-tighter uppercase underline decoration-emerald-400 italic">The Human Heart</h4>
          <p class="text-sm text-slate-300 leading-relaxed italic mb-8 font-bold underline decoration-slate-700">
            A 4-chambered pump (2 Atria, 2 Ventricles). 
            <br/><br/>
            <strong>Atomic Logic:</strong> Left side contains oxygenated blood; Right side contains deoxygenated blood. They are separated by the <strong>Septum</strong>.
          </p>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic">PUMP</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 bg-white border-2 border-rose-100 rounded-3xl shadow-sm">
          <h5 class="text-rose-600 font-black uppercase text-xs mb-2">Arteries</h5>
          <p class="text-[10px] text-slate-500 italic">Carry blood AWAY from heart. Thick muscular walls. High pressure.</p>
        </div>
        <div class="p-6 bg-white border-2 border-blue-100 rounded-3xl shadow-sm">
          <h5 class="text-blue-600 font-black uppercase text-xs mb-2">Veins</h5>
          <p class="text-[10px] text-slate-500 italic">Carry blood TOWARD heart. Thin walls. Have <strong>Valves</strong> to prevent backflow.</p>
        </div>
        <div class="p-6 bg-white border-2 border-slate-100 rounded-3xl shadow-sm">
          <h5 class="text-slate-600 font-black uppercase text-xs mb-2">Capillaries</h5>
          <p class="text-[10px] text-slate-500 italic">Microscopic vessels. One cell thick for exchange of materials.</p>
        </div>
      </div>
    </div>
  `,

  "circulation-lymph": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">03. Blood Circulation & Lymph</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-indigo-200">
          Humans have <strong>Double Circulation</strong>.
        </p>
      </section>

      <div class="space-y-8">
        <div class="p-8 bg-indigo-50 border-2 border-indigo-100 rounded-[3rem]">
          <h4 class="font-black text-indigo-900 text-lg uppercase mb-4 underline">Double Circulation</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs italic font-bold">
            <p class="p-4 bg-white rounded-xl border border-indigo-200">1. Pulmonary: Heart → Lungs → Heart.</p>
            <p class="p-4 bg-white rounded-xl border border-indigo-200">2. Systemic: Heart → Body → Heart.</p>
          </div>
        </div>
        
        <div class="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
          <h4 class="text-amber-400 font-black text-2xl mb-4 italic uppercase underline tracking-widest">The Lymphatic System</h4>
          <p class="text-sm text-slate-300 leading-relaxed italic mb-6 font-bold underline decoration-slate-700">
            Collects excess tissue fluid and returns it to the blood. Contains <strong>Lymphocytes</strong> for immunity.
          </p>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">LYMPH</div>
        </div>
      </div>
    </div>
  `,

  "plant-transport-deep": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-emerald-600 pb-2 uppercase tracking-tighter italic underline underline-offset-8">04. Transport in Plants</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-10 bg-emerald-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden">
          <h4 class="text-emerald-400 font-black text-2xl mb-4 italic uppercase underline tracking-widest">Xylem</h4>
          <p class="text-sm text-emerald-100 leading-relaxed italic font-bold underline decoration-emerald-700 mb-6">Transport of Water and Minerals.</p>
          <p class="text-xs">Driven by <strong>Transpiration Pull</strong>, Root Pressure, and Capillary Action.</p>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">UP</div>
        </div>
        <div class="p-10 bg-blue-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden">
          <h4 class="text-blue-400 font-black text-2xl mb-4 italic uppercase underline tracking-widest">Phloem</h4>
          <p class="text-sm text-blue-100 leading-relaxed italic font-bold underline decoration-blue-700 mb-6">Transport of Manufactured Food (Sucrose).</p>
          <p class="text-xs italic underline">This process is called <strong>Translocation</strong>.</p>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">ALL</div>
        </div>
      </div>
    </div>
  `
};
