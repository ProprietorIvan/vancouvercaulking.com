import React from "react";
import Image from "next/image";

const BCIncorporationDocument = () => {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto bg-white">
      {/* First Page - Cover Sheet */}
      <div className="mb-8 border border-gray-300 p-6 shadow-sm">
        <div className="flex items-center mb-6">
          <div className="relative h-16 w-32">
            <Image
              src="/photos/homepage/bclogo.png"
              alt="BC Registry Services Logo"
              fill
              sizes="128px"
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
          </div>
          <div className="ml-auto">
            <div className="text-sm">
              <p>Mailing Address:</p>
              <p>PO Box 9431 Stn Prov Govt</p>
              <p>Victoria BC V8W 9V3</p>
              <p>www.corporateonline.gov.bc.ca</p>
            </div>
          </div>
          <div className="ml-8">
            <div className="text-sm">
              <p>Location:</p>
              <p>2nd Floor - 940 Blanshard Street</p>
              <p>Victoria BC</p>
              <p>1 877 526-1526</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Cover Sheet</h1>
          <h2 className="text-xl">
            Vancouver Flood Restoration and Emergency Repairs by
            <br />
            Felicita Holdings Ltd.
          </h2>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Confirmation of Service</h2>

          <div className="mb-2 flex">
            <span className="w-48 font-bold">Form Filed:</span>
            <span>Incorporation Application</span>
          </div>

          <div className="mb-2 flex">
            <span className="w-48 font-bold">Date and Time of Filing:</span>
            <span>November 22, 2022 06:05 PM Pacific Time</span>
          </div>

          <div className="mb-2 flex">
            <span className="w-48 font-bold">
              Incorporation Effective Date:
            </span>
            <span>
              The incorporation is to take effect at the time that this
              application is filed with the Registrar.
            </span>
          </div>

          <div className="mb-2 flex">
            <span className="w-48 font-bold">Recognition Date and Time:</span>
            <span>Incorporated November 22, 2022 06:05 PM Pacific Time</span>
          </div>

          <div className="mb-2 flex">
            <span className="w-48 font-bold">Name of Company:</span>
            <span>
              Vancouver Flood Restoration and Emergency Repairs by
              <br />
              Felicita Holdings Ltd.
            </span>
          </div>

          <div className="mb-2 flex">
            <span className="w-48 font-bold">Incorporation Number:</span>
            <span>BC1388113</span>
          </div>
        </div>

        <div className="p-4 bg-gray-100 mb-8">
          <p className="font-bold mb-2">
            A federal Business Number has been assigned to this company as noted
            below. [IMPORTANT: KEEP THIS FOR YOUR COMPANY RECORDS]
          </p>
          <p className="text-xl font-bold mb-2">
            Business Number: 751218744BC0001
          </p>
          <p className="text-sm">
            For assistance or additional information regarding the Business
            Number, contact Canada Revenue Agency at 1-800-959-5525 from 8:15
            a.m. to 8:00 p.m., Monday through Friday, excluding statutory
            holidays.
          </p>
        </div>

        <div className="mb-8">
          <p className="font-bold mb-2">This package contains:</p>
          <ul className="list-disc ml-8">
            <li>Certified Copy of the Incorporation Application</li>
            <li>Certified Copy of the Notice of Articles</li>
            <li>Certificate of Incorporation</li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="mb-2">
            Check your documents carefully to ensure there are no errors or
            omissions. If errors or omissions are discovered, please contact the
            Corporate Registry for instructions on how to correct the errors or
            omissions.
          </p>
          <p className="mb-2">
            The British Columbia Business Corporations Act requires all
            incorporated companies to file information such as annual reports, a
            change of address or a change of directors. For information
            regarding these filings, review the &quot;Maintaining Your B.C.
            Company&quot; document at
            www.bcregistryservices.gov.bc.ca/local/bcreg/documents/forms/reg36.pdf.
          </p>
          <p className="mb-2">
            For information regarding completion of forms, contact the Corporate
            Registry at 1 877 526-1526.
          </p>
        </div>

        <div className="text-right mt-6 text-xs">
          <p>Page: 1 of 1</p>
        </div>
      </div>

      {/* Second Page - Incorporation Application */}
      <div className="mb-8 border border-gray-300 p-6 shadow-sm">
        <div className="flex items-center mb-6">
          <div className="relative h-16 w-32">
            <Image
              src="/photos/homepage/bclogo.png"
              alt="BC Registry Services Logo"
              fill
              sizes="128px"
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
          </div>
          <div className="ml-auto">
            <div className="text-sm">
              <p>Mailing Address:</p>
              <p>PO Box 9431 Stn Prov Govt</p>
              <p>Victoria BC V8W 9V3</p>
              <p>www.corporateonline.gov.bc.ca</p>
            </div>
          </div>
          <div className="ml-8">
            <div className="text-sm">
              <p>Location:</p>
              <p>2nd Floor - 940 Blanshard Street</p>
              <p>Victoria BC</p>
              <p>1 877 526-1526</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Incorporation Application</h1>
          <h2 className="text-lg">FORM 1</h2>
          <h2 className="text-lg">BUSINESS CORPORATIONS ACT</h2>
          <h2 className="text-lg">Section 10</h2>
        </div>

        <div className="bg-gray-100 p-2 mb-4 flex justify-between items-center">
          <div>
            <p className="text-sm font-bold">CERTIFIED COPY</p>
            <p className="text-sm">Of a Document filed with the Province of</p>
            <p className="text-sm">British Columbia Registrar of Companies</p>
          </div>
          <div>
            <div className="relative h-10 w-20">
              <Image
                src="/photos/homepage/signature.png"
                alt="T.K. SPARKS Signature"
                fill
                sizes="80px"
                style={{ objectFit: "contain", objectPosition: "right" }}
              />
            </div>
            <p className="text-sm">T.K. SPARKS</p>
          </div>
        </div>

        <div className="border-2 border-black p-4 mb-6">
          <div className="mb-4">
            <p className="font-bold">FILING DETAILS:</p>
            <p>Incorporation Application for:</p>
            <p className="font-bold">
              Vancouver Flood Restoration and Emergency Repairs by
              <br />
              Felicita Holdings Ltd.
            </p>
            <p>&nbsp;</p>
            <p>
              Incorporation Number: <span className="font-bold">BC1388113</span>
            </p>
          </div>

          <div className="mb-4">
            <p className="font-bold">Filed Date and Time:</p>
            <p>November 22, 2022 06:05 PM Pacific Time</p>
          </div>

          <div>
            <p className="font-bold">Recognition Date and Time:</p>
            <p>Incorporated on November 22, 2022 06:05 PM Pacific Time</p>
          </div>
        </div>

        <div className="bg-gray-200 p-2 mb-4 text-center">
          <h2 className="font-bold">INCORPORATION APPLICATION</h2>
        </div>

        <div className="mb-4 flex">
          <div className="w-1/2">
            <p className="font-bold">Name Reservation Number:</p>
            <p>NR7045248</p>
          </div>
          <div className="w-1/2">
            <p className="font-bold">Name Reserved:</p>
            <p>
              Vancouver Flood Restoration and Emergency Repairs by
              <br />
              Felicita Holdings Ltd.
            </p>
          </div>
        </div>

        <div className="bg-gray-200 p-2 mb-4">
          <p className="font-bold">INCORPORATION EFFECTIVE DATE:</p>
          <p>
            The incorporation is to take effect at the time that this
            application is filed with the Registrar.
          </p>
        </div>

        <div className="bg-gray-200 p-2 mb-4">
          <p className="font-bold">INCORPORATOR INFORMATION</p>
        </div>

        <div className="mb-4 flex">
          <div className="w-1/2">
            <p className="font-bold">Last Name, First Name, Middle Name:</p>
            <p>Rogachyov, Ivan</p>
          </div>
          <div className="w-1/2">
            <p className="font-bold">Mailing Address:</p>
            <p>828 Cardero St</p>
            <p>Vancouver BC V6G 2G5</p>
            <p>CANADA</p>
          </div>
        </div>

        <div className="text-right mt-6 text-xs">
          <p>BC1388113 Page: 1 of 3</p>
        </div>
      </div>

      {/* Third Page - Completing Party */}
      <div className="mb-8 border border-gray-300 p-6 shadow-sm">
        <div className="bg-gray-200 p-2 mb-4">
          <p className="font-bold">COMPLETING PARTY</p>
        </div>

        <div className="mb-6 flex">
          <div className="w-1/2">
            <p className="font-bold">Last Name, First Name, Middle Name:</p>
            <p>Rogachyov, Ivan</p>
          </div>
          <div className="w-1/2">
            <p className="font-bold">Mailing Address:</p>
            <p>828 Cardero St</p>
            <p>Vancouver BC V6G 2G5</p>
            <p>CANADA</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="font-bold">Completing Party Statement</p>
          <p className="mb-2">
            I, Ivan Rogachyov, the completing party, have examined the articles
            and the incorporation agreement applicable to the company that is to
            be incorporated by the filing of the Incorporation Application and
            confirm that:
          </p>
          <p className="mb-1">
            a) the Articles and the Incorporation Agreement both contain a
            signature line for each person identified as an incorporator in the
            Incorporation Application with the name of that person set out
            legibly under the signature lines,
          </p>
          <p className="mb-1">
            b) an original signature has been placed on each of those signature
            lines, and
          </p>
          <p className="mb-1">
            c) I have no reason to believe that the signature placed on a
            signature line is not the signature of the person whose name is set
            out under that signature line.
          </p>
        </div>

        <div className="bg-gray-200 p-2 mb-4 text-center">
          <h2 className="font-bold">NOTICE OF ARTICLES</h2>
        </div>

        <div className="mb-4">
          <p className="font-bold">Name of Company:</p>
          <p>
            Vancouver Flood Restoration and Emergency Repairs by
            <br />
            Felicita Holdings Ltd.
          </p>
        </div>

        <div className="bg-gray-200 p-2 mb-4">
          <p className="font-bold">REGISTERED OFFICE INFORMATION</p>
        </div>

        <div className="mb-4 flex">
          <div className="w-1/2">
            <p className="font-bold">Mailing Address:</p>
            <p>828 Cardero St</p>
            <p>Vancouver BC V6G 2G5</p>
            <p>CANADA</p>
          </div>
          <div className="w-1/2">
            <p className="font-bold">Delivery Address:</p>
            <p>828 Cardero St</p>
            <p>Vancouver BC V6G 2G5</p>
            <p>CANADA</p>
          </div>
        </div>

        <div className="bg-gray-200 p-2 mb-4">
          <p className="font-bold">RECORDS OFFICE INFORMATION</p>
        </div>

        <div className="mb-4 flex">
          <div className="w-1/2">
            <p className="font-bold">Mailing Address:</p>
            <p>828 Cardero St</p>
            <p>Vancouver BC V6G 2G5</p>
            <p>CANADA</p>
          </div>
          <div className="w-1/2">
            <p className="font-bold">Delivery Address:</p>
            <p>828 Cardero St</p>
            <p>Vancouver BC V6G 2G5</p>
            <p>CANADA</p>
          </div>
        </div>

        <div className="bg-gray-200 p-2 mb-4">
          <p className="font-bold">DIRECTOR INFORMATION</p>
        </div>

        <div className="mb-4 flex">
          <div className="w-1/2">
            <p className="font-bold">Last Name, First Name, Middle Name:</p>
            <p>Rogachyov, Ivan Ivan</p>
          </div>
        </div>

        <div className="mb-4 flex">
          <div className="w-1/2">
            <p className="font-bold">Mailing Address:</p>
            <p>828 Cardero St</p>
            <p>Vancouver BC V6G 2G5</p>
            <p>CANADA</p>
          </div>
          <div className="w-1/2">
            <p className="font-bold">Delivery Address:</p>
            <p>828 Cardero St</p>
            <p>Vancouver BC V6G 2G5</p>
            <p>CANADA</p>
          </div>
        </div>

        <div className="text-right mt-6 text-xs">
          <p>BC1388113 Page: 2 of 3</p>
        </div>
      </div>

      {/* Fourth Page - Authorized Share Structure */}
      <div className="mb-8 border border-gray-300 p-6 shadow-sm">
        <div className="bg-gray-900 p-2 mb-4 text-white">
          <p className="font-bold">AUTHORIZED SHARE STRUCTURE</p>
        </div>

        <div className="mb-8">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="p-2 border-b border-gray-300 w-12">1.</td>
                <td className="p-2 border-b border-gray-300">No Maximum</td>
                <td className="p-2 border-b border-gray-300">Common Shares</td>
                <td className="p-2 border-b border-gray-300">
                  Without Par Value
                </td>
              </tr>
              <tr>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2">
                  Without Special Rights or
                  <br />
                  Restrictions attached
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="border-t border-dashed border-gray-400 my-4"></div>

        <div className="text-right mt-6 text-xs">
          <p>BC1388113 Page: 3 of 3</p>
        </div>
      </div>

      {/* Fifth Page - Certificate of Incorporation */}
      <div className="mb-8 border border-gray-300 p-6 shadow-sm">
        <div className="flex justify-between items-start mb-12">
          <div className="relative h-16 w-32">
            <Image
              src="/photos/homepage/bclogo.png"
              alt="BC Logo"
              fill
              sizes="128px"
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
          </div>
          <p className="text-lg">Number: BC1388113</p>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-6">CERTIFICATE</h1>
          <h1 className="text-3xl font-bold mb-6">OF</h1>
          <h1 className="text-3xl font-bold mb-6">INCORPORATION</h1>
          <h2 className="text-xl">BUSINESS CORPORATIONS ACT</h2>
        </div>

        <div className="mb-12">
          <p className="text-lg mb-2">
            I Hereby Certify that Vancouver Flood Restoration and Emergency
            Repairs by Felicita Holdings Ltd. was incorporated under the
            Business Corporations Act on November 22, 2022 at 06:05 PM Pacific
            Time.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="relative h-28 w-28">
            <Image
              src="/photos/homepage/RedCircle.png"
              alt="Official Seal"
              fill
              sizes="112px"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="text-right">
            <p className="mb-2">
              Issued under my hand at Victoria, British Columbia
            </p>
            <p className="mb-6">On November 22, 2022</p>
            <div className="relative h-10 w-20 ml-auto mb-2">
              <Image
                src="/photos/homepage/signature.png"
                alt="T.K. SPARKS Signature"
                fill
                sizes="80px"
                style={{ objectFit: "contain", objectPosition: "right" }}
              />
            </div>
            <p className="font-bold">T.K. SPARKS</p>
            <p>Registrar of Companies</p>
            <p>Province of British Columbia</p>
            <p>Canada</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p>ELECTRONIC CERTIFICATE</p>
        </div>
      </div>
    </div>
  );
};

export default BCIncorporationDocument;
