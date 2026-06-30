'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose HealthCare+?</h2>
            <p className="text-lg text-muted mb-6">
              For over two decades, HealthCare+ has been a beacon of excellence in the medical field. Our commitment to innovation, patient care, and clinical rigor sets us apart.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full"></div>
                <div>
                  <h3 className="font-bold mb-2">Expert Medical Team</h3>
                  <p className="text-muted">Board-certified physicians with decades of combined experience</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-1 bg-accent rounded-full"></div>
                <div>
                  <h3 className="font-bold mb-2">Advanced Technology</h3>
                  <p className="text-muted">Latest medical equipment and diagnostic capabilities</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full"></div>
                <div>
                  <h3 className="font-bold mb-2">Patient-First Approach</h3>
                  <p className="text-muted">Compassionate care tailored to individual patient needs</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-1 bg-accent rounded-full"></div>
                <div>
                  <h3 className="font-bold mb-2">Accreditation & Standards</h3>
                  <p className="text-muted">Joint Commission accredited with ISO certifications</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white rounded-2xl p-12 shadow-lg">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted">Healthcare Professionals</p>
                </div>
                <div className="h-px bg-border"></div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">15</div>
                  <p className="text-muted">Specialized Departments</p>
                </div>
                <div className="h-px bg-border"></div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">100K+</div>
                  <p className="text-muted">Annual Patient Visits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
