import React from "react";
import Head from "next/head";

export default function LegalLetter() {
  return (
    <>
      <Head>
        <title>Legal Notice - Privacy Violations and Harassment</title>
        <meta name="description" content="Legal Notice" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-300 shadow-lg p-8 sm:p-10">
            {/* Letterhead */}
            <div className="mb-8 border-b-2 border-gray-800 pb-4">
              <h1 className="text-2xl font-serif font-bold text-gray-800">
                LEGAL COUNSEL
              </h1>
              <div className="flex justify-between mt-2 text-sm">
                <div>
                  <p className="font-medium">British Columbia</p>
                  <p>Vancouver, BC</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">File No.: TS-2025-0323</p>
                  <p>CONFIDENTIAL</p>
                </div>
              </div>
            </div>

            {/* Date and Reference */}
            <div className="mb-6">
              <p className="mb-1">March 23, 2025</p>
              <p className="font-medium">WITHOUT PREJUDICE</p>
            </div>

            {/* Addressee */}
            <div className="mb-8">
              <p>Strata Council</p>
              <p>Building Management</p>
              <p>[STRATA PLAN NUMBER]</p>
              <p>[PROPERTY ADDRESS]</p>
              <p>Vancouver, British Columbia</p>
            </div>

            {/* Re: line */}
            <p className="font-bold mb-6">
              Re: FORMAL NOTICE - PRIVACY VIOLATIONS, HARASSMENT, AND
              UNAUTHORIZED ENTRY
            </p>

            {/* Salutation */}
            <p className="mb-4">
              To the Strata Council and Building Management:
            </p>

            {/* Body of letter */}
            <div className="space-y-4 text-justify mb-8">
              <p>
                This office has been retained to represent the interests of Mr.
                Tymofii Sukhomlyn regarding serious and ongoing privacy
                violations, harassment, and unauthorized entry concerning his
                townhouse unit at the above-referenced property.
              </p>

              <p>
                It has come to our attention that over the past several weeks,
                our client has experienced multiple incidents that constitute
                direct violations of his privacy rights and tenant protections
                under the British Columbia Residential Tenancy Act, the Personal
                Information Protection Act, and the Strata Property Act. These
                incidents include, but are not limited to:
              </p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Individuals approaching our client&apos;s door on multiple
                  occasions, taking photographs, and inappropriately questioning
                  his guests when he was not present;
                </li>
                <li>
                  Unauthorized entry into our client&apos;s townhouse
                  approximately one month ago, during which the water was turned
                  on during nighttime hours in winter conditions, creating a
                  potential health and safety hazard;
                </li>
                <li>
                  A confrontation on March 22, 2025, during which an elderly
                  male resident made threatening remarks to our client and
                  photographed his vehicle&apos;s license plate without consent
                  (photographic evidence of this individual has been preserved);
                </li>
                <li>
                  Building management or strata representatives photographing or
                  recording our client&apos;s guests without notice,
                  authorization, or legitimate purpose;
                </li>
                <li>
                  A separate incident in which someone was observed recording
                  video of the interior of our client&apos;s townhouse while a
                  guest was present.
                </li>
              </ol>

              <p>
                These actions constitute serious violations of our client&apos;s
                legal rights and may expose the Strata Corporation, its agents,
                and individual participants to significant liability under
                multiple provincial statutes and common law torts including
                harassment, invasion of privacy, trespass, and breach of the
                covenant of quiet enjoyment.
              </p>

              <p>
                We hereby formally request that the Strata Council and Building
                Management:
              </p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Immediately cease and desist all unauthorized surveillance,
                  photography, and recording of our client, his guests, and his
                  personal property;
                </li>
                <li>
                  Provide written confirmation that no Strata Council member,
                  building management staff, or their agents will enter our
                  client&apos;s unit without proper notice and authorization as
                  required by law;
                </li>
                <li>
                  Provide written permission for our client to install a
                  motion-activated security camera at his unit entrance for his
                  personal protection and documentation of any future incidents;
                </li>
                <li>
                  Deliver a formal written response acknowledging these
                  violations and outlining the specific steps being taken to
                  ensure they do not recur;
                </li>
                <li>
                  Confirm in writing that our client&apos;s right to welcome
                  visitors of his choosing will be respected in accordance with
                  his rights as a tenant.
                </li>
              </ol>

              <p>
                Please be advised that our client is in the process of filing a
                formal complaint with the local police detachment regarding
                these incidents. Furthermore, should these violations continue,
                we are prepared to initiate proceedings with the Civil
                Resolution Tribunal and the Office of the Information and
                Privacy Commissioner for British Columbia.
              </p>

              <p>
                We would prefer to resolve this matter amicably and without
                court intervention. To this end, we request a comprehensive
                written response to the concerns outlined above by{" "}
                <span className="font-bold">
                  4:00 PM on Tuesday, March 25, 2025
                </span>
                .
              </p>

              <p>
                If the intention of the Strata Council or building management is
                to have our client vacate his unit, we remind you that all
                actions must follow proper legal procedures through the
                Residential Tenancy Branch. Our client is not in breach of any
                tenancy rules and maintains all rights afforded to him under
                provincial law.
              </p>

              <p>
                Finally, please note that any further harassment, intimidation,
                or privacy violations directed toward our client or his guests
                will be viewed as intentional and may result in claims for
                punitive damages in addition to any compensatory damages sought.
              </p>
            </div>

            {/* Closing */}
            <div className="mb-12">
              <p className="mb-8">Yours truly,</p>
              <div className="border-b border-black w-48"></div>
              <p className="mt-1">Legal Representative</p>
              <p>Counsel for Tymofii Sukhomlyn</p>
            </div>

            {/* Notice */}
            <div className="text-xs">
              <p>
                NOTICE: This communication is subject to legal privilege and
                contains confidential information intended only for the persons
                to whom it is addressed. Any unauthorized disclosure, copying,
                or distribution of this communication is strictly prohibited.
              </p>
            </div>

            {/* Seal/Stamp Effect */}
            <div className="absolute bottom-20 right-16 h-32 w-32 border-2 border-gray-400 rounded-full flex items-center justify-center opacity-20 rotate-12">
              <div className="text-center text-sm font-serif">
                <p>OFFICIAL</p>
                <p>LEGAL</p>
                <p>NOTICE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
