export const chap27Content: Record<string, string> = {
  "mendel-laws": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. Mendelian Genetics</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          Gregor Mendel is the "Father of Genetics." He used pea plants to discover the laws of inheritance.
        </p>
      </section>

      <div class="p-10 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
        <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">Mendel's Laws</h4>
        <div class="space-y-6 text-sm font-medium text-slate-700 italic underline decoration-blue-100 underline-offset-4">
          <p>1. <strong>Law of Segregation:</strong> Alleles separate during gamete formation. Each gamete gets only one allele.</p>
          <p>2. <strong>Law of Independent Assortment:</strong> Different genes separate independently of each other.</p>
        </div>
      </div>

      <div class="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
        <div class="relative z-10">
          <h4 class="text-emerald-400 font-black text-2xl mb-4 italic tracking-tighter uppercase underline">Key Terminology</h4>
          <ul class="space-y-2 text-xs font-bold italic underline decoration-slate-700 underline-offset-4">
            <li>• <strong>Genotype:</strong> The genetic makeup (e.g., Tt).</li>
            <li>• <strong>Phenotype:</strong> The physical appearance (e.g., Tall).</li>
            <li>• <strong>Homozygous:</strong> Two identical alleles (TT or tt).</li>
            <li>• <strong>Heterozygous:</strong> Two different alleles (Tt).</li>
          </ul>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic uppercase">TRAIT</div>
      </div>
    </div>
  `,

  "dna-rna-structure": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. DNA & RNA: The Genetic Code</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-lg hover:border-indigo-400 transition-all">
          <h4 class="font-black text-indigo-600 text-xl mb-4 underline uppercase tracking-widest italic">DNA (The Blueprint)</h4>
          <p class="text-xs text-slate-600 leading-relaxed italic font-bold mb-4">
            Double helix structure. Contains Deoxyribose sugar.
          </p>
          <div class="p-4 bg-indigo-50 rounded-xl text-[10px] italic font-medium text-indigo-800">
            <strong>Bases:</strong> Adenine (A), Thymine (T), Guanine (G), Cytosine (C). <br/>
            Pairing: A-T, G-C.
          </div>
        </div>

        <div class="p-8 bg-indigo-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div class="relative z-10">
            <h4 class="text-emerald-400 font-black text-xl mb-4 underline italic uppercase">RNA (The Messenger)</h4>
            <p class="text-sm text-indigo-100 leading-relaxed italic font-bold mb-6">
              Single stranded. Contains Ribose sugar.
            </p>
            <div class="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs italic">
              <strong>Base Change:</strong> Thymine is replaced by <strong>Uracil (U)</strong>. RNA translates DNA code into Proteins.
            </div>
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic uppercase">CODE</div>
        </div>
      </div>
    </div>
  `,

  "genetics-division": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic underline underline-offset-8">03. Chromosomes & Cell Division</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-black uppercase tracking-tighter underline decoration-rose-200">
          Chromosomes are the carriers of genes.
        </p>
      </section>

      <div class="p-10 bg-white border-4 border-rose-100 rounded-[3rem] shadow-xl relative overflow-hidden">
        <h4 class="text-rose-600 font-black text-2xl mb-6 tracking-widest uppercase underline italic">Atomic Fact: Crossing Over</h4>
        <p class="text-sm text-slate-600 leading-relaxed font-black italic uppercase tracking-wide mb-6">
          During Prophase I of Meiosis, homologous chromosomes exchange segments.
        </p>
        <div class="p-6 bg-rose-50 rounded-2xl border border-rose-100 text-xs italic font-bold">
          Result: Genetic Variation. This is why you don't look exactly like your siblings.
        </div>
      </div>
    </div>
  `,

  "sex-link-blood": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-blue-500 pb-2 uppercase tracking-tighter italic">04. Sex Linkage & Blood Groups</h3>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-10 bg-blue-50 border-2 border-blue-100 rounded-[3.5rem] shadow-xl">
          <h4 class="font-black text-blue-900 text-xl mb-4 italic uppercase underline">Sex Linkage</h4>
          <p class="text-xs text-slate-600 leading-relaxed italic font-bold mb-6 underline decoration-blue-200 underline-offset-8">
            Traits carried on the X chromosome.
          </p>
          <ul class="space-y-2 text-xs font-bold italic tracking-tighter text-slate-600 uppercase">
            <li>• Color Blindness.</li>
            <li>• Haemophilia (Bleeder's disease).</li>
          </ul>
        </div>
        <div class="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden">
          <h4 class="text-emerald-400 font-black text-xl mb-4 italic uppercase underline">ABO Blood Groups</h4>
          <p class="text-xs leading-relaxed font-bold italic mb-6 underline decoration-slate-700 underline-offset-8">
            Controlled by multiple alleles: A, B, and O.
          </p>
          <div class="p-4 bg-white/5 rounded-2xl border border-white/10 italic text-[10px] font-black uppercase tracking-widest text-emerald-300">
            Group O is the Universal Donor. Group AB is the Universal Recipient.
          </div>
        </div>
      </div>
    </div>
  `
};
