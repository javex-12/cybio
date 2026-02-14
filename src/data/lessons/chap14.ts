export const chap14Content: Record<string, string> = {
  "forest-grassland": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Forest & Grassland</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          Land habitats are defined by their vegetation, which is controlled by rainfall.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Forest -->
        <div class="p-8 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">Tropical Rainforest</h4>
          <p class="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
            High rainfall and high temperature. Dense vegetation in <strong>strata</strong> (layers).
          </p>
          <ul class="space-y-2 text-[10px] font-black uppercase tracking-widest text-blue-700 italic">
            <li>• Emergent Layer (Tallest trees).</li>
            <li>• Canopy (Continuous leafy layer).</li>
            <li>• Understorey (Shade tolerant plants).</li>
            <li>• Forest Floor (Decomposers).</li>
          </ul>
        </div>

        <!-- Grassland -->
        <div class="p-8 bg-emerald-50 border-2 border-emerald-100 rounded-[3rem] shadow-xl">
          <h4 class="font-black text-emerald-900 text-lg uppercase mb-4 underline italic">Grassland (Savanna)</h4>
          <p class="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
            Moderate rainfall. Dominated by grasses with scattered trees.
          </p>
          <div class="p-4 bg-white rounded-2xl border border-emerald-200 text-[10px] font-black uppercase italic tracking-tighter text-emerald-600">
            Atomic Adaptations: Trees have thick bark (fire resistance) and deep roots (drought resistance).
          </div>
        </div>
      </div>
    </div>
  `,

  "marsh-arid": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic underline">02. Marsh & Arid Lands</h3>
      </section>

      <div class="space-y-8">
        <!-- Marsh -->
        <div class="p-8 bg-indigo-50 border-2 border-indigo-100 rounded-[2.5rem] shadow-lg">
          <h4 class="text-indigo-800 font-black text-xl mb-4 underline italic uppercase">Marsh (Wetlands)</h4>
          <p class="text-sm text-slate-600 leading-relaxed italic font-bold">Water-logged soil with low oxygen.</p>
          <p class="text-[10px] text-slate-500 mt-4 italic font-medium underline decoration-slate-100 italic">
            Atomic Adaptation: Plants have <strong>Pneumatophores</strong> (Breathing roots) to get oxygen from the air.
          </p>
        </div>

        <!-- Arid Lands -->
        <div class="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div class="relative z-10">
            <h4 class="text-amber-400 font-black text-xl mb-4 underline italic uppercase">Arid Lands (Deserts)</h4>
            <p class="text-sm text-slate-300 leading-relaxed italic font-bold mb-6">Very low rainfall and extreme temperatures.</p>
            <div class="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs italic underline decoration-slate-700">
              <strong>Atomic Adaptations:</strong> Xerophytes (Cactus) have succulent stems to store water, needle-like leaves to reduce transpiration, and thick cuticles.
            </div>
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-[12rem] italic">DRY</div>
        </div>
      </div>
    </div>
  `
};
