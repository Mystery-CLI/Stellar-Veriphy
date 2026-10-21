import Image from "next/image";

type RecognitionEntry = {
  name: string;
  websiteUrl: string;
  recognitionType?: string;
  logo?: {
    src: string;
    alt: string;
  };
};

// Add only organizations or technologies that are acknowledged in project documentation.
const recognitionEntries: RecognitionEntry[] = [
  {
    name: "Stellar",
    websiteUrl: "https://stellar.org",
    recognitionType: "Blockchain ecosystem",
  },
  {
    name: "Soroban",
    websiteUrl: "https://developers.stellar.org",
    recognitionType: "Smart contract platform",
  },
];

function RecognitionMark({ entry }: { entry: RecognitionEntry }) {
  if (entry.logo) {
    return (
      <Image
        src={entry.logo.src}
        alt={entry.logo.alt}
        width={48}
        height={48}
        className="h-12 w-12 rounded-lg object-contain"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-700 text-lg font-semibold text-slate-100"
    >
      {entry.name.charAt(0)}
    </span>
  );
}

export function PartnersSupportersSection() {
  return (
    <section
      aria-labelledby="partners-supporters-heading"
      className="bg-slate-800 px-4 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="partners-supporters-heading" className="text-3xl font-bold text-white sm:text-4xl">
            Our Partners &amp; Supporters
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            We recognize the ecosystem technologies and communities that help make open, verifiable
            digital content possible.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2" aria-label="Recognized ecosystem technologies">
          {recognitionEntries.map((entry) => (
            <li key={entry.name}>
              <a
                href={entry.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${entry.name} website (opens in a new tab)`}
                className="flex items-center gap-4 rounded-lg border border-slate-600 bg-slate-700/50 p-4 text-left transition-colors hover:border-blue-400 hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                <RecognitionMark entry={entry} />
                <span className="min-w-0">
                  <span className="block text-lg font-semibold text-white">{entry.name}</span>
                  {entry.recognitionType && (
                    <span className="mt-1 block text-sm text-slate-300">{entry.recognitionType}</span>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
