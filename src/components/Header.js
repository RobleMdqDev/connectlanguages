import * as prismic from "@prismicio/client";
import {PrismicText} from "@prismicio/react";
import {PrismicNextLink} from "@prismicio/next";

import {Bounded} from "./Bounded";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export async function Header({navigation, settings}) {
  const session = await getServerSession(authOptions);

  console.log(session);
  return (
    <Bounded as="header" yPadding="sm">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicNextLink
          href="/"
          className="text-xl font-semibold tracking-tight"
        >
          <PrismicText field={settings.data.siteTitle} />
        </PrismicNextLink>
        <nav>
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {navigation.data?.links.map((item) => (
              <li
                key={prismic.asText(item.label)}
                className="font-semibold tracking-tight text-slate-800"
              >
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
            {session?.user && (
              <li className="font-semibold tracking-tight text-slate-800">
                <Link href={"/dashboard"}>
                  <p>{session?.user?.name}</p>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}
