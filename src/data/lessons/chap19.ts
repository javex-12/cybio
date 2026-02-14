export const chap19Content: Record<string, string> = {
  "kidney-structure": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. The Human Kidney</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          The kidneys are bean-shaped organs responsible for filtering blood and maintaining <strong>Homeostasis</strong>.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">Gross Anatomy</h4>
          <ul class="space-y-3 text-xs font-bold italic tracking-tighter text-blue-700 uppercase underline decoration-blue-100 underline-offset-4">
            <li>• <strong>Cortex:</strong> Outer dark-red layer.</li>
            <li>• <strong>Medulla:</strong> Inner pale-red layer containing renal pyramids.</li>
            <li>• <strong>Pelvis:</strong> Central funnel-like cavity leading to the Ureter.</li>
          </ul>
        </div>
        <div class="p-8 bg-slate-900 text-white rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col justify-center">
          <h4 class="text-emerald-400 font-black text-xl mb-4 italic uppercase underline tracking-widest">Renal Functions</h4>
          <ul class="space-y-3 text-[10px] text-slate-300 italic font-bold underline decoration-slate-700 underline-offset-4">
            <li>1. Excretion of Nitrogenous wastes (Urea).</li>
            <li>2. <strong>Osmoregulation:</strong> Water and Salt balance.</li>
            <li>3. Acid-Base Balance (pH regulation).</li>
          </ul>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic uppercase">FILTER</div>
        </div>
      </div>
    </div>
  `,

  "nephron-anatomy": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. Structure of the Nephron</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-indigo-200">
          The <strong>Nephron</strong> is the structural and functional unit of the kidney. There are about 1 million per kidney.
        </p>
      </section>

      <div class="relative pl-12 border-l-4 border-indigo-100 space-y-10">
        <div class="relative">
          <div class="absolute -left-[54px] top-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black">1</div>
          <h5 class="text-lg font-black text-slate-800 uppercase italic underline">Ultrafiltration</h5>
          <p class="text-sm text-slate-500 italic font-medium">Occurs in the <strong>Bowman's Capsule</strong>. High pressure forces small molecules (water, salts, glucose, urea) out of the blood.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-[54px] top-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black">2</div>
          <h5 class="text-lg font-black text-slate-800 uppercase italic underline">Selective Reabsorption</h5>
          <p class="text-sm text-slate-500 italic font-medium">Occurs in the <strong>Proximal Convoluted Tubule (PCT)</strong>. Glucose and amino acids are pumped back into the blood.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-[54px] top-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black">3</div>
          <h5 class="text-lg font-black text-slate-800 uppercase italic underline">Water Reabsorption</h5>
          <p class="text-sm text-slate-500 italic font-medium">Occurs in the <strong>Loop of Henle</strong> and Collecting Duct (regulated by ADH).</p>
        </div>
      </div>
    </div>
  `,

  "skin-excretion": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic">03. The Skin as an Excretory Organ</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-10 bg-rose-50 border-2 border-rose-100 rounded-[3.5rem] shadow-xl">
          <h4 class="font-black text-rose-900 text-xl mb-4 italic uppercase underline">Sweat Glands</h4>
          <p class="text-xs text-slate-600 leading-relaxed italic font-bold mb-6 underline decoration-rose-200 underline-offset-8">
            Excrete <strong>Sweat</strong> (Water, Salts, and small amounts of Urea).
          </p>
          <div class="p-4 bg-white rounded-2xl border border-rose-200 text-[10px] font-black uppercase italic tracking-widest text-rose-600 shadow-sm">
            Atomic Function: Thermoregulation (Cooling the body through evaporation).
          </div>
        </div>
        <div class="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center">
          <h4 class="text-emerald-400 font-black text-xl mb-4 italic uppercase underline">The Dermis</h4>
          <p class="text-sm italic font-black uppercase tracking-tighter underline decoration-slate-700 underline-offset-8 leading-relaxed">
            The inner layer of skin containing blood vessels, nerves, and sweat glands.
          </p>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">SKIN</div>
        </div>
      </div>
    </div>
  `
};
