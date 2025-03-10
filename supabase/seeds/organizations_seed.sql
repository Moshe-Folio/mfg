-- Seed data for organizations
INSERT INTO organizations (name, website, description, membership_type, global_reach, categories, image_url)
VALUES
  ('National Association of Manufacturers', 'https://www.nam.org', 'The largest manufacturing association in the United States, representing small and large manufacturers in every industrial sector.', 'Both', 'National', ARRAY['Manufacturing Advocacy', 'Policy', 'Industry Representation'], 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'),
  
  ('Manufacturing Institute', 'https://www.themanufacturinginstitute.org', 'The workforce development and education partner of the National Association of Manufacturers.', 'Both', 'National', ARRAY['Workforce Development', 'Education', 'Skills Training'], 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'),
  
  ('Society of Manufacturing Engineers', 'https://www.sme.org', 'A professional organization dedicated to advancing manufacturing knowledge and influencing more than half a million manufacturing practitioners annually.', 'Individual', 'Global', ARRAY['Manufacturing Education', 'Professional Development', 'Knowledge Sharing'], 'https://images.unsplash.com/photo-1581092160607-ee22731c2eaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'),
  
  ('Manufacturing USA', 'https://www.manufacturingusa.com', 'A network of regional institutes, each with a specialized technology focus, working to secure U.S. global leadership in advanced manufacturing.', 'Both', 'National', ARRAY['Advanced Manufacturing', 'Innovation', 'Technology Development'], 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'),
  
  ('Association for Manufacturing Excellence', 'https://www.ame.org', 'A not-for-profit organization dedicated to helping companies with continuous improvement and enterprise excellence.', 'Corporate', 'Global', ARRAY['Continuous Improvement', 'Lean Manufacturing', 'Operational Excellence'], 'https://images.unsplash.com/photo-1531758724865-26576625f97f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'),
  
  ('International Federation of Robotics', 'https://ifr.org', 'Promotes the use of robot technology worldwide and represents the robotics industry at an international level.', 'Corporate', 'Global', ARRAY['Robotics', 'Automation', 'Industry Standards'], 'https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'); 