"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function CloudIQSection() {
  return (
    <>
      <motion.section
        className="w-full flex flex-col items-center py-52 px-16 cloudiq-section"
        style={{ backgroundColor: '#ffffff', color: '#060606', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2
          className="HeroHeading text-center max-w-75 tb:max-w-max "
          style={{ fontWeight: 300 }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="">Meet <span style={{ fontWeight: 500 }}>CloudIQ</span></span>
          <br className="hidden tb:block" /> <span className="whitespace-nowrap tb:whitespace-normal">Your</span> <span style={{ fontWeight: 500 }}>AI Security Agent</span>
        </motion.h2>

        <motion.p
          className="label mt-4 text-center"
          style={{ color: '#060606' }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          Whether you&apos;re in security, compliance, or ops our dashboards deliver tailored,<br className="hidden md:inline" /> real-time insights that cut through noise and drive action
        </motion.p>

        <div className="mt-12 flex flex-col" style={{ gap: 23 }}>
          <motion.div
            className="flex cloudiq-cards-row"
            style={{ gap: 23 }}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden flex flex-col cloudiq-card"
              style={{ width: 525, height: 451, background: '#070707', border: '1px solid rgba(255,255,255,0.08)' }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div className="relative flex-1 overflow-hidden flex justify-center">
                <Image
                  src="/images/home/cloud-iq/attack-path-analysis.png"
                  alt="Attack Path Analysis"
                  width={442}
                  height={584}
                  className="object-cover object-top translate-y-10"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#070707] to-transparent" />
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-linear-to-r from-[#070707] to-transparent" />
                <div className="absolute top-0 bottom-0 right-0 w-16 bg-linear-to-l from-[#070707] to-transparent" />
              </div>
              <div className="px-6 py-5">
                <h3 className="feature-card-heading" style={{ textAlign: 'left' }}>Context-Aware Intelligence</h3>
                <p className="feature-card-para mt-2" style={{ textAlign: 'left' }}>
                  Get real-time answers on vulnerabilities, compliance gaps, and misconfigurations.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden flex flex-col cloudiq-card"
              style={{ width: 525, height: 451, background: '#070707', border: '1px solid rgba(255,255,255,0.08)' }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div className="relative flex-1 overflow-hidden flex flex-col items-center justify-start pt-10 gap-3">
                <Image
                  src="/images/home/cloud-iq/compliance-score.png"
                  alt="Compliance Score"
                  width={496}
                  height={188}
                />
                <Image
                  src="/images/home/cloud-iq/compliance-score.png"
                  alt="Compliance Score"
                  width={496}
                  height={188}
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#070707] to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-12 bg-linear-to-b from-[#070707] to-transparent" />
                <div className="absolute top-0 bottom-0 left-0 w-8 bg-linear-to-r from-[#070707] to-transparent" />
                <div className="absolute top-0 bottom-0 right-0 w-8 bg-linear-to-l from-[#070707] to-transparent" />
              </div>
              <div className="px-6 py-5">
                <h3 className="feature-card-heading" style={{ textAlign: 'left' }}>Conversational Remediation</h3>
                <p className="feature-card-para mt-2" style={{ textAlign: 'left' }}>
                  Chat naturally to trigger playbooks, investigate attack paths, or ask about compliance scores.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden flex flex-col cloudiq-row2-card"
            style={{ width: 1073, height: 451, background: '#070707', border: '1px solid rgba(255,255,255,0.08)' }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="relative flex-1 overflow-hidden flex justify-center">
              <Image
                src="/images/home/cloud-iq/threat-visualization.png"
                alt="Threat Visualization"
                width={779}
                height={530}
                className="object-cover object-top translate-y-12"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#070707] to-transparent" />
              <div className="absolute top-0 bottom-0 left-0 w-24 bg-linear-to-r from-[#070707] to-transparent" />
              <div className="absolute top-0 bottom-0 right-0 w-24 bg-linear-to-l from-[#070707] to-transparent" />
            </div>
            <div className="px-6 py-5">
              <h3 className="feature-card-heading" style={{ textAlign: 'left' }}>Visualize Threats. Strengthen Coverage.</h3>
              <p className="feature-card-para mt-2" style={{ textAlign: 'left' }}>
                Trace critical attack paths in your infrastructure and measure protection coverage by account tier.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section
        className="w-full flex justify-center pt-20 pb-36 cloudiq-auto-section"
        style={{ backgroundColor: '#ffffff', color: '#060606', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <div className="flex items-start gap-16 cloudiq-auto-inner" style={{ width: 1073 }}>
          <div className="flex flex-col cloudiq-auto-left" style={{ minWidth: 440, maxWidth: 440 }}>
            <h2 className="HeroHeading" style={{ fontWeight: 300 }}>
              Security That<br className="hidden md:inline" /> <span style={{ whiteSpace: 'nowrap' }}>
                <span style={{ fontWeight: 500 }}>Acts</span> On Its{' '}
                <span style={{ fontWeight: 500 }}>Own</span>.
              </span>
            </h2>
            <p className="label mt-4" style={{ color: '#060606' }}>
              Trigger fast, policy-based remediation using prebuilt workflows.
              Integrate with tools like JIRA, AWS GuardDuty, and GCP to automate
              your incident response.
            </p>
            <div className="mt-8">
              <Image
                src="/images/home/cloud-iq/workflow-node-list.png"
                alt="Workflow Nodes"
                width={354}
                height={480}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex-1 flex items-start gap-4 cloudiq-auto-right">
            <Image
              src="/images/home/cloud-iq/flow-diagram.png"
              alt="Workflow Flow Diagram"
              width={418}
              height={590}
              className="cloudiq-flow-diagram"
            />
            <Image
              src="/images/home/cloud-iq/workflow-properties.png"
              alt="Properties Panel"
              width={294}
              height={413}
              className="cloudiq-properties-panel"
            />
          </div>
        </div>
      </section>
    </>
  );
}
