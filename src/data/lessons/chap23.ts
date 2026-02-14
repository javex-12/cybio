export const chap23Content: Record<string, string> = {
  "cns-brain-spinal": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-900 border-b-8 border-blue-600 pb-2 mb-6 uppercase italic tracking-tighter">01. The Central Nervous System (CNS)</h3>
        <p class="text-xl text-slate-600 leading-relaxed font-bold italic underline decoration-blue-200 underline-offset-8">
          The CNS consists of the Brain and the Spinal Cord. It is the "Command Center" of the organism.
        </p>
      </section>

      <div class="p-10 bg-blue-50 border-2 border-blue-100 rounded-[3rem] shadow-xl">
        <h4 class="font-black text-blue-900 text-lg uppercase mb-4 underline italic">The Human Brain</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-medium text-slate-700 italic underline decoration-blue-100 underline-offset-4">
          <p>• <strong>Cerebrum:</strong> Largest part. Controls intelligence, memory, and voluntary actions.</p>
          <p>• <strong>Cerebellum:</strong> Controls balance and muscle coordination.</p>
          <p>• <strong>Medulla Oblongata:</strong> Controls involuntary actions like heartbeat and breathing.</p>
          <p>• <strong>Hypothalamus:</strong> Regulates temperature and thirst; links to the endocrine system.</p>
        </div>
      </div>

      <div class="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
        <div class="relative z-10">
          <h4 class="text-emerald-400 font-black text-2xl mb-4 italic tracking-tighter uppercase underline">The Spinal Cord</h4>
          <p class="text-sm text-slate-300 leading-relaxed italic mb-6 font-bold underline decoration-slate-700">
            A long tube of nervous tissue extending from the brain. It is responsible for <strong>Reflex Actions</strong>.
          </p>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">CNS</div>
      </div>
    </div>
  `,

  "neurons-synapse": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-indigo-600 pb-2 uppercase tracking-tighter italic">02. Neurons & Nerve Impulses</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-medium underline decoration-indigo-200">
          The <strong>Neuron</strong> is the functional unit of the nervous system.
        </p>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-lg hover:border-indigo-400 transition-all">
          <h4 class="font-black text-indigo-600 text-xl mb-4 underline uppercase tracking-widest italic">Types of Neurons</h4>
          <ul class="space-y-3 text-xs font-bold text-slate-600 italic tracking-tighter uppercase">
            <li>• <strong>Sensory (Afferent):</strong> Receptors to CNS.</li>
            <li>• <strong>Motor (Efferent):</strong> CNS to Effectors (Muscles).</li>
            <li>• <strong>Relay (Intermediate):</strong> Link sensory and motor neurons within the CNS.</li>
          </ul>
        </div>

        <div class="p-8 bg-indigo-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div class="relative z-10">
            <h4 class="text-emerald-400 font-black text-xl mb-4 underline italic uppercase">The Synapse</h4>
            <p class="text-sm text-indigo-100 leading-relaxed italic font-bold mb-6">
              The microscopic gap between two neurons.
            </p>
            <div class="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs italic">
              Impulses cross via chemical <strong>Neurotransmitters</strong> (like Acetylcholine).
            </div>
          </div>
          <div class="absolute right-0 bottom-0 opacity-10 font-black text-8xl italic">GAP</div>
        </div>
      </div>
    </div>
  `,

  "reflex-arc": `
    <div class="space-y-12">
      <section>
        <h3 class="text-3xl font-black text-slate-800 border-b-4 border-rose-600 pb-2 uppercase tracking-tighter italic underline underline-offset-8">03. The Reflex Arc</h3>
        <p class="text-lg text-slate-600 leading-relaxed mt-6 italic font-black uppercase tracking-tighter underline decoration-rose-200">
          A reflex action is a fast, automatic response to a stimulus.
        </p>
      </section>

      <div class="p-10 bg-white border-4 border-rose-100 rounded-[3rem] shadow-xl relative overflow-hidden">
        <h4 class="text-rose-600 font-black text-2xl mb-6 tracking-widest uppercase underline italic">Path of a Reflex</h4>
        <div class="flex flex-wrap items-center justify-center gap-4 text-xs font-black uppercase italic tracking-widest">
          <span class="p-3 bg-rose-50 rounded-xl">Stimulus</span>
          <ChevronRight />
          <span class="p-3 bg-rose-50 rounded-xl">Receptor</span>
          <ChevronRight />
          <span class="p-3 bg-rose-50 rounded-xl">Sensory Neuron</span>
          <ChevronRight />
          <span class="p-3 bg-slate-900 text-white rounded-xl">CNS (Spinal Cord)</span>
          <ChevronRight />
          <span class="p-3 bg-rose-50 rounded-xl">Motor Neuron</span>
          <ChevronRight />
          <span class="p-3 bg-rose-50 rounded-xl">Response</span>
        </div>
        <div class="mt-8 p-6 bg-rose-50 rounded-2xl border border-rose-100 text-xs italic font-bold">
          Atomic Logic: Simple reflexes (like the knee-jerk) bypass the brain to save time and prevent injury.
        </div>
      </div>
    </div>
  `
};
