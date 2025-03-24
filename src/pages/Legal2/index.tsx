import React from "react";
import Head from "next/head";
// Let's make this component standalone without requiring the Layout
// You can add your site's layout component later if needed

export default function LegalNotice() {
  return (
    <>
      <Head>
        <title>Legal Notice - Felicita Holdings Ltd. v. Luis Macias</title>
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
                LUIS MACIAS
                <br />
                3848 West 1st Avenue
                <br />
                Vancouver, British Columbia, V6R 1H5
                <br />
                <span className="font-bold">DEFENDANT</span>
              </p>
            </div>

            {/* Notice */}
            <div className="mb-8">
              <h2 className="text-center text-xl font-serif font-bold mb-6 underline">
                NOTICE OF CIVIL CLAIM
              </h2>
              <p className="mb-4 font-bold">TO: THE DEFENDANT, LUIS MACIAS</p>
              <p className="mb-4 text-justify">
                TAKE NOTICE that this legal action has been commenced against
                you by the Plaintiff, Felicita Holdings Ltd., in the Small
                Claims Court of British Columbia, for failure to pay an
                outstanding and undisputed invoice for emergency water damage
                response services rendered at your residence, 3848 West 1st
                Avenue, Vancouver, BC.
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
                  operating as AZ Handyman Service and Vancouver Flood
                  Restoration.
                </p>
                <p className="pl-4 mb-2">
                  1.2 The Defendant, Luis Macias, is the owner and legal
                  occupant of 3848 West 1st Avenue, Vancouver, BC V6R 1H5.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-bold">
                  2. The Incident and Emergency Restoration Work
                </h4>
                <p className="pl-4 mb-2">
                  2.1 On March 12, 2025, the Plaintiff was contacted by the
                  Defendant regarding a water damage emergency at his property
                  requiring immediate response and remediation.
                </p>
                <p className="pl-4 mb-2">
                  2.2 In response to this emergency, the Plaintiff dispatched a
                  team of two certified technicians who promptly arrived on-site
                  to assess the situation and implement emergency mitigation
                  measures.
                </p>
                <p className="pl-4 mb-2">
                  2.3 Upon inspection of the property, the Plaintiff&apos;s
                  certified technicians:
                </p>
                <div className="pl-8">
                  <p className="mb-1">
                    a) Conducted a comprehensive assessment of the water damage.
                  </p>
                  <p className="mb-1">
                    b) Installed specialized equipment including two
                    dehumidifiers and fans to control moisture and prevent
                    further damage.
                  </p>
                  <p className="mb-1">
                    c) Implemented necessary emergency procedures to mitigate
                    property damage.
                  </p>
                </div>

                <p className="pl-4 mb-2 mt-2">
                  2.4 The Plaintiff performed industry-standard water damage
                  restoration services, including:
                </p>
                <div className="pl-8">
                  <p className="mb-1">
                    a) Emergency response and professional assessment.
                  </p>
                  <p className="mb-1">
                    b) Deployment and maintenance of specialized drying
                    equipment.
                  </p>
                  <p className="mb-1">
                    c) Monitoring of the affected areas to prevent secondary
                    damage such as mold growth.
                  </p>
                </div>

                <p className="pl-4 mb-2 mt-2">
                  2.5 These services were essential, professionally executed,
                  and necessary under the Institute of Inspection, Cleaning and
                  Restoration Certification (IICRC) standards for Professional
                  Water Damage Restoration.
                </p>

                <p className="pl-4 mb-2 mt-2">
                  2.6 On March 14, 2025, the Plaintiff and Defendant scheduled
                  additional restoration work to be performed on March 15, 2025,
                  at 11:00 AM.
                </p>

                <p className="pl-4 mb-2 mt-2">
                  2.7 On March 15, 2025, the Plaintiff&apos;s technicians
                  arrived at the scheduled time but were denied entry by the
                  Defendant, preventing them from completing the agreed-upon
                  restoration work.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-bold">
                  3. The Defendant&apos;s Unjustified Failure to Pay
                </h4>
                <p className="pl-4 mb-2">
                  3.1 On March 17, 2025, the Plaintiff issued Invoice #284 for
                  services rendered, totaling $1,344.00, inclusive of taxes. The
                  invoice was due immediately.
                </p>
                <p className="pl-4 mb-2">
                  3.2 The invoice specifically covered:
                </p>
                <div className="pl-8">
                  <p className="mb-1">
                    a) Emergency Water Damage Response: $200.00
                  </p>
                  <p className="mb-1">
                    b) Rental Equipment (dehumidifiers and fans): $900.00
                  </p>
                  <p className="mb-1">
                    c) Site Visit for scheduled restoration work: $180.00
                  </p>
                  <p className="mb-1">d) GST (5%): $64.00</p>
                </div>

                <p className="pl-4 mb-2 mt-2">
                  3.3 As a professional courtesy, the Plaintiff did not apply
                  the standard $500 emergency call-out fee that would normally
                  be charged for such services.
                </p>

                <p className="pl-4 mb-2">
                  3.4 Despite multiple notices and reminders, including:
                </p>
                <div className="pl-8">
                  <p className="mb-1">
                    a) Email confirmation that the invoice was opened by the
                    Defendant on March 18, 2025.
                  </p>
                  <p className="mb-1">
                    b) Confirmation that the invoice was viewed in the Client
                    Hub on March 20, 2025.
                  </p>
                  <p className="mb-1">
                    c) A formal demand letter sent on March 21, 2025.
                  </p>
                </div>

                <p className="pl-4 mb-2 mt-2">
                  3.5 The Defendant has refused to pay the outstanding amount
                  despite receiving the full benefit of the emergency services
                  and equipment rental.
                </p>
                <p className="pl-4 mb-2">
                  3.6 The Defendant has wrongfully retained the benefit of the
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
                  Immediate payment of the outstanding amount of $1,344.00, plus
                  interest as per the Court Order Interest Act, R.S.B.C. 1996,
                  c. 79.
                </li>
                <li className="mb-2">
                  Special damages, including any additional financial losses
                  incurred as a result of the Defendant&apos;s unjustified
                  refusal to pay.
                </li>
                <li className="mb-2">
                  Costs of this action, including legal fees and disbursements.
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
                      The Defendant directly requested and benefited from the
                      Plaintiff&apos;s emergency services and is therefore
                      contractually obligated to pay.
                    </li>
                    <li>
                      The services were performed competently, professionally,
                      and in accordance with industry standards.
                    </li>
                    <li>
                      BC Small Claims Court has ruled in favor of service
                      providers in similar cases where work was performed at the
                      request of the property owner who failed to pay.
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
                      The Defendant has retained the benefit of emergency
                      services and equipment while avoiding payment.
                    </li>
                    <li>
                      The Plaintiff&apos;s services prevented significant
                      additional water damage to the Defendant&apos;s property.
                    </li>
                    <li>
                      There is no juristic reason for the Defendant to retain
                      this benefit without providing compensation.
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <p className="font-bold">Quantum Meruit</p>
                  <ul className="list-disc pl-8">
                    <li>
                      The Plaintiff is entitled to reasonable compensation for
                      services rendered at the request of the Defendant.
                    </li>
                    <li>
                      The invoice amount represents the fair market value of the
                      emergency services provided, with the standard emergency
                      call-out fee being waived as a professional courtesy.
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
                      to the Defendant&apos;s refusal to pay for services
                      received.
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
              <p className="mb-4">Dated this 24th day of March, 2025.</p>
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
              <p>File: FHL-2025-03-24-LM</p>
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
