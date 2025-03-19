import React from "react";
import Head from "next/head";
// Let's make this component standalone without requiring the Layout
// You can add your site's layout component later if needed

export default function LegalNotice() {
  return (
    <>
      <Head>
        <title>Legal Notice - Felicita Holdings Ltd. v. Ingrid Anilson</title>
        <meta name="description" content="Legal Notice of Civil Claim" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#f9f7f1] border-2 border-gray-300 shadow-lg p-8 sm:p-10 relative overflow-hidden">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <div className="transform rotate-45 text-gray-500 text-9xl font-serif">
                LEGAL DOCUMENT
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8 border-b-2 border-gray-700 pb-4">
              <h1 className="text-xl sm:text-2xl font-serif font-bold">
                IN THE PROVINCIAL COURT OF BRITISH COLUMBIA
              </h1>
              <h2 className="text-lg sm:text-xl font-serif">
                SMALL CLAIMS DIVISION – VANCOUVER REGISTRY
              </h2>
              <p className="text-lg mt-2">No. S-___________</p>
            </div>

            {/* Parties */}
            <div className="mb-8 text-center">
              <p className="mb-2 font-bold">BETWEEN:</p>
              <p className="mb-4 font-serif">
                FELICITA HOLDINGS LTD.
                <br />
                922 Homer St, Vancouver, BC V6B 1T7
                <br />
                <span className="font-bold">PLAINTIFF</span>
              </p>

              <p className="mb-2 font-bold">AND:</p>
              <p className="mb-4 font-serif">
                INGRID ANILSON
                <br />
                1345 West 4th Avenue, Unit 110
                <br />
                Vancouver, British Columbia, V6H 4E6
                <br />
                <span className="font-bold">DEFENDANT</span>
              </p>
            </div>

            {/* Notice */}
            <div className="mb-8">
              <h2 className="text-center text-xl font-serif font-bold mb-6 underline">
                NOTICE OF CIVIL CLAIM
              </h2>
              <p className="mb-4 font-bold">
                TO: THE DEFENDANT, INGRID ANILSON
              </p>
              <p className="mb-4 text-justify">
                TAKE NOTICE that this legal action has been commenced against
                you by the Plaintiff, Felicita Holdings Ltd., in the Small
                Claims Court of British Columbia, for failure to pay an
                outstanding and undisputed invoice for emergency flood
                restoration services rendered at your residence, Unit 110, 1345
                West 4th Avenue, Vancouver, BC.
              </p>

              <p className="mb-4 text-justify font-bold">
                YOU MUST FILE A RESPONSE TO THIS CLAIM IN FORM 2 WITHIN THE TIME
                LIMIT SPECIFIED BELOW, OR JUDGMENT MAY BE ENTERED AGAINST YOU
                WITHOUT FURTHER NOTICE.
              </p>

              <p className="mb-2">
                If you intend to dispute this claim, you must:
              </p>
              <ol className="list-decimal pl-8 mb-4">
                <li>
                  File a Response in Form 2 within the prescribed time limit,
                  and
                </li>
                <li>Serve a copy of the filed Response to the Plaintiff.</li>
              </ol>

              <p className="mb-4 text-justify">
                Failure to do so within the prescribed time will result in a
                default judgment against you, which may lead to seizure of
                assets, garnishment of wages, and enforcement actions as
                permitted by law.
              </p>
            </div>

            {/* Time Limit */}
            <div className="mb-8">
              <h3 className="font-serif font-bold mb-2">
                TIME LIMIT FOR RESPONSE
              </h3>
              <p className="mb-2">
                A Response to Civil Claim must be filed and served on the
                Plaintiff:
              </p>
              <ul className="list-disc pl-8 mb-4">
                <li>Within 14 days if you reside in British Columbia.</li>
                <li>Within 30 days if you reside elsewhere in Canada.</li>
                <li>Within 60 days if you reside outside Canada.</li>
              </ul>
            </div>

            {/* Part 1 */}
            <div className="mb-8">
              <h3 className="font-serif font-bold mb-2">
                PART 1: STATEMENT OF FACTS
              </h3>

              <div className="mb-4">
                <h4 className="font-bold">1. The Parties</h4>
                <p className="pl-4 mb-2">
                  1.1 The Plaintiff, Felicita Holdings Ltd., is a duly
                  incorporated company in British Columbia, engaged in flood
                  restoration, emergency remediation, and handyman services
                  under the trade names AZ Handyman Service and Vancouver Flood
                  Restoration.
                </p>
                <p className="pl-4 mb-2">
                  1.2 The Defendant, Ingrid Anilson, is the tenant and legal
                  occupant of Unit 110, 1345 West 4th Avenue, Vancouver, BC.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-bold">
                  2. The Incident and Emergency Restoration Work
                </h4>
                <p className="pl-4 mb-2">
                  2.1 On January 23, 2025, at approximately 8:45 AM, the
                  Plaintiff was contacted by Matt, the property manager of 1345
                  West 4th Avenue, regarding a flooding emergency originating
                  from a washing machine malfunction in Unit 210, which caused
                  significant water damage to the surrounding units, including
                  Unit 110 (Defendant&apos;s unit).
                </p>
                <p className="pl-4 mb-2">
                  2.2 In response to this emergency, the Plaintiff dispatched an
                  emergency response team, which arrived on-site at 10:30 AM to
                  prevent further structural damage and mitigate loss.
                </p>
                <p className="pl-4 mb-2">
                  2.3 Upon inspection of Unit 110, the Plaintiff&apos;s
                  certified technicians discovered:
                </p>
                <div className="pl-8">
                  <p className="mb-1">
                    a) Water intrusion in the ceiling, posing an immediate
                    structural risk to the Defendant&apos;s unit.
                  </p>
                  <p className="mb-1">
                    b) Severe moisture accumulation, increasing the risk of mold
                    contamination and long-term property damage.
                  </p>
                  <p className="mb-1">
                    c) The necessity for immediate emergency intervention to
                    prevent escalating repair costs.
                  </p>
                </div>

                <p className="pl-4 mb-2 mt-2">
                  2.4 The Plaintiff performed industry-standard remediation,
                  including:
                </p>
                <div className="pl-8">
                  <p className="mb-1">
                    a) Controlled ceiling cuts to remove compromised materials.
                  </p>
                  <p className="mb-1">
                    b) Installation of industrial dehumidifiers to extract
                    excess moisture and prevent mold growth.
                  </p>
                  <p className="mb-1">
                    c) Sealing and protecting the workspace to ensure a safe
                    environment during the remediation.
                  </p>
                </div>

                <p className="pl-4 mb-2 mt-2">
                  2.5 These services were essential, legally compliant, and
                  necessary under the Institute of Inspection, Cleaning and
                  Restoration Certification (IICRC) S500 Standard for
                  Professional Water Damage Restoration.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-bold">
                  3. The Defendant&apos;s Unjustified Failure to Pay
                </h4>
                <p className="pl-4 mb-2">
                  3.1 On February 21, 2025, the Plaintiff issued Invoice #264
                  for services rendered, totaling $1,926.75, inclusive of taxes.
                  The invoice was due immediately.
                </p>
                <p className="pl-4 mb-2">
                  3.2 Despite multiple notices and reminders, the Defendant has:
                </p>
                <div className="pl-8">
                  <p className="mb-1">
                    a) Refused to pay the outstanding amount.
                  </p>
                  <p className="mb-1">
                    b) Failed to provide an insurance claim number.
                  </p>
                  <p className="mb-1">
                    c) Failed to engage in any good-faith resolution efforts.
                  </p>
                </div>

                <p className="pl-4 mb-2 mt-2">
                  3.3 The Defendant may seek reimbursement from her landlord or
                  insurance provider, but she remains legally obligated to pay
                  the Plaintiff directly for services performed on her behalf.
                </p>
                <p className="pl-4 mb-2">
                  3.4 The Defendant has wrongfully retained the benefit of the
                  Plaintiff&apos;s emergency services without compensation,
                  which constitutes unjust enrichment under Garland v.
                  Consumers&apos; Gas Co., 2004 SCC 25.
                </p>
              </div>
            </div>

            {/* Part 2 */}
            <div className="mb-8">
              <h3 className="font-serif font-bold mb-2">
                PART 2: RELIEF SOUGHT
              </h3>
              <p className="mb-2">
                The Plaintiff seeks the following relief against the Defendant:
              </p>
              <ol className="list-decimal pl-8 mb-4">
                <li className="mb-2">
                  Immediate payment of the outstanding amount of $1,926.75, plus
                  interest as per the Court Order Interest Act, R.S.B.C. 1996,
                  c. 79.
                </li>
                <li className="mb-2">
                  Special damages, including any additional financial losses
                  incurred as a result of the Defendant&apos;s unjustified
                  refusal to pay.
                </li>
                <li className="mb-2">
                  An order requiring the Defendant to provide full disclosure of
                  any insurance claim filed regarding this incident.
                </li>
                <li className="mb-2">
                  Costs of this action, including legal fees and disbursements.
                </li>
                <li className="mb-2">
                  An injunction preventing the Defendant from engaging in
                  further delay tactics.
                </li>
                <li className="mb-2">
                  Any other relief this Honourable Court deems just and
                  appropriate.
                </li>
              </ol>
            </div>

            {/* Part 3 */}
            <div className="mb-8">
              <h3 className="font-serif font-bold mb-2">PART 3: LEGAL BASIS</h3>
              <ol className="mb-4">
                <li className="mb-2">
                  <p className="font-bold">
                    Contractual Obligation to Pay for Services Rendered
                  </p>
                  <ul className="list-disc pl-8">
                    <li>
                      The Defendant directly benefited from the Plaintiff&apos;s
                      services and is therefore contractually obligated to pay.
                    </li>
                    <li>
                      The Defendant cannot rely on insurance disputes or
                      landlord responsibilities to avoid liability.
                    </li>
                    <li>
                      BC Small Claims Court has ruled in favor of service
                      providers in similar cases where work was performed for a
                      property occupant who failed to pay.
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <p className="font-bold">
                    Unjust Enrichment (Garland v. Consumers&apos; Gas Co., 2004
                    SCC 25)
                  </p>
                  <ul className="list-disc pl-8">
                    <li>
                      The Defendant has retained the benefit of services while
                      avoiding payment.
                    </li>
                    <li>
                      The Plaintiff&apos;s services prevented significant
                      additional damages.
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <p className="font-bold">
                    Equitable Principles & Court Order Interest Act
                  </p>
                  <ul className="list-disc pl-8">
                    <li>
                      The Plaintiff is entitled to pre-judgment and
                      post-judgment interest on the outstanding amount.
                    </li>
                    <li>
                      The Plaintiff seeks full reimbursement of legal costs due
                      to the Defendant&apos;s refusal to engage in good-faith
                      negotiations.
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <p className="font-bold">BC Small Claims Court Precedents</p>
                  <ul className="list-disc pl-8">
                    <li>
                      Where services have been provided and no valid dispute
                      exists, courts have consistently ruled in favor of the
                      service provider.
                    </li>
                    <li>
                      The Defendant&apos;s attempt to delay payment through
                      insurance disputes does not relieve her liability to the
                      Plaintiff.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Part 4 */}
            <div className="mb-8">
              <h3 className="font-serif font-bold mb-2">
                PART 4: PLACE OF TRIAL
              </h3>
              <p className="mb-4">
                The Plaintiff designates Vancouver, British Columbia as the
                place of trial.
              </p>
            </div>

            {/* Part 5 */}
            <div className="mb-8">
              <h3 className="font-serif font-bold mb-2">
                PART 5: SERVICE ADDRESS OF THE PLAINTIFF
              </h3>
              <p className="mb-1">Felicita Holdings Ltd.</p>
              <p className="mb-1">922 Homer St, Vancouver, BC V6B 1T7</p>
              <p className="mb-4">Email: info@azhandyman.ca</p>
            </div>

            {/* Signature */}
            <div className="mb-8">
              <p className="mb-4">Dated this 16th day of March, 2025.</p>
              <div className="mt-8 mb-2">
                <p className="border-t border-black w-48 pt-1">Signature:</p>
                <p>Ivan Rogachyov</p>
                <p>Internal Legal Counsel</p>
                <p>Felicita Holdings Ltd.</p>
              </div>
            </div>

            {/* Final Warning */}
            <div className="border-2 border-black p-4 mb-4">
              <h3 className="font-serif font-bold text-center mb-2">
                FINAL WARNING TO DEFENDANT
              </h3>
              <p className="mb-2 font-bold">
                FAILURE TO RESPOND OR PAY WILL RESULT IN:
              </p>
              <ul className="list-disc pl-8 mb-2">
                <li>
                  A court judgment against you, affecting your credit rating.
                </li>
                <li>Potential wage garnishment or asset seizure.</li>
                <li>Additional legal fees and enforcement costs.</li>
              </ul>
              <p className="text-center font-bold mt-4">
                ACT IMMEDIATELY TO AVOID ESCALATION.
              </p>
            </div>

            {/* Document Footer */}
            <div className="mt-8 text-xs text-right">
              <p>File: FHL-2025-03-16-IA</p>
              <p>Page 1 of 1</p>
            </div>

            {/* Aged Paper Effect - Subtle stains/marks */}
            <div className="absolute top-12 right-20 h-24 w-24 bg-yellow-900 rounded-full opacity-[0.03] rotate-45"></div>
            <div className="absolute bottom-24 left-16 h-20 w-36 bg-yellow-800 rounded-full opacity-[0.02] -rotate-12"></div>
            <div className="absolute top-1/3 left-1/4 h-48 w-48 bg-yellow-700 rounded-full opacity-[0.01] rotate-90"></div>
          </div>
        </div>
      </div>
    </>
  );
}
