-- Seed data for communities
INSERT INTO communities (name, website, description, platform, followers_count, categories, image_url)
VALUES
  ('Manufacturing Innovation Network', 'https://www.linkedin.com/groups/manufacturing-innovation', 'A global community of manufacturing professionals focused on innovation and technology adoption.', 'LinkedIn', 10000, ARRAY['Innovation', 'Technology Adoption', 'Networking'], 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'),
  
  ('Women in Manufacturing', 'https://www.womeninmanufacturing.org', 'Supporting, promoting, and inspiring women in the manufacturing industry.', 'Website', 5000, ARRAY['Women in Manufacturing', 'Diversity', 'Professional Development'], 'https://images.unsplash.com/photo-1573497701240-345a300b8d36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'),
  
  ('Manufacturing Engineering Society', 'https://www.reddit.com/r/manufacturingengineering', 'A professional community for manufacturing engineers to share knowledge and best practices.', 'Reddit', 15000, ARRAY['Engineering', 'Professional Development', 'Knowledge Sharing'], 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'),
  
  ('Smart Manufacturing Forum', 'https://twitter.com/smartmfgforum', 'A community focused on the implementation of smart manufacturing technologies and Industry 4.0.', 'Twitter', 8000, ARRAY['Smart Manufacturing', 'Industry 4.0', 'Digital Transformation'], 'https://images.unsplash.com/photo-1563770660941-10a63607692e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'),
  
  ('Sustainable Manufacturing Alliance', 'https://www.youtube.com/sustainablemfg', 'A community of manufacturers committed to sustainable practices and environmental responsibility.', 'YouTube', 3000, ARRAY['Sustainability', 'Green Manufacturing', 'Environmental Responsibility'], 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'),
  
  ('Manufacturing Tech Talks', 'https://www.linkedin.com/groups/manufacturing-tech-talks', 'A forum for discussing the latest manufacturing technologies and their practical applications.', 'LinkedIn', 7500, ARRAY['Manufacturing Technology', 'Innovation', 'Industry Trends'], 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'); 